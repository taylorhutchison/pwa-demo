import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { AuthModule } from '../auth/auth.module';
import { MsalModule } from '@azure/msal-angular';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeContainerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AuthModule,
    SharedModule
  ]
})
export class HomeModule { }
