import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  @ViewChild('video')
  video: ElementRef<HTMLVideoElement>;

  userAgent: string;

  constructor() {
    this.userAgent = navigator.userAgent;
  }

  ngOnInit(): void {

  }

}
