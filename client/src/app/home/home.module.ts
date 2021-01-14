import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    HomeContainerComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
