import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

import { PhotosContainerComponent } from './components/photos-container/photos-container.component';

const routes: Routes = [{ path: '', component: PhotosContainerComponent, canActivate: [MsalGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
