import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {
    this.userAgent = navigator.userAgent;
  }

  ngOnInit(): void {
    this.http.get<any>('https://graph.microsoft.com/v1.0/me')
      .subscribe(profile => {
        console.log(profile);
        const id = profile.id
        this.http.get<any>(`https://graph.microsoft.com/v1.0/users/${id}/transitiveMemberOf`)
          .subscribe(groups => {
            console.log(groups);
          })
      });
  }

}
