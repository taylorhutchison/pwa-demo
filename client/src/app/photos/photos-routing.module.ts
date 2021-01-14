import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosContainerComponent } from './components/photos-container/photos-container.component';

const routes: Routes = [{ path: '', component: PhotosContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
