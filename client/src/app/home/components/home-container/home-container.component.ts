import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit, AfterViewInit {

  userAgent: string;

  constructor(private http: HttpClient) {
    this.userAgent = navigator.userAgent;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.http.get<any>('https://graph.microsoft.com/v1.0/me')
    //   .subscribe(profile => {
    //     console.log(profile);
    //     const id = profile.id
    //     this.http.get<any>(`https://graph.microsoft.com/v1.0/users/${id}/transitiveMemberOf`)
    //       .subscribe(groups => {
    //         console.log(groups);
    //       })
    //   });
  }

}
