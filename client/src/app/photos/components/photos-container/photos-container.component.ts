import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-photos-container',
  templateUrl: './photos-container.component.html',
  styleUrls: ['./photos-container.component.scss']
})
export class PhotosContainerComponent implements OnInit, AfterViewInit {

  @ViewChild('video')
  video: ElementRef<HTMLVideoElement>;

  cameraStreamOpen = false;

  dataUrls: string[] = [];

  error: string;

  stream: MediaStream;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.video.nativeElement.addEventListener('canplay', () => {
      this.cameraStreamOpen = true;
    });
  }

  ngOnDestroy() {
    this.video.nativeElement.srcObject = null;
    this.stream.getTracks()[0].stop();
  }

  async openCamera() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: true
      });
      this.video.nativeElement.srcObject = this.stream;
    }
    catch (error) {
      this.error = error;
    }
  }

  async takePhoto() {
    const canvas = document.createElement('canvas');
    canvas.width = 1280;
    canvas.height = 720;
    const context = canvas.getContext('2d');
    context.drawImage(this.video.nativeElement, 0, 0, 1280, 720);
    const url = canvas.toDataURL('image/jpeg');
    this.dataUrls = [...this.dataUrls, url];
  }

}
