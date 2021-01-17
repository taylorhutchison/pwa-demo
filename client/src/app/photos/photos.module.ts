import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { StreamViewerComponent } from './components/stream-viewer/stream-viewer.component';
import { PhotosContainerComponent } from './components/photos-container/photos-container.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    StreamViewerComponent,
    PhotosContainerComponent,
    GalleryComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    AuthModule,
    SharedModule
  ]
})
export class PhotosModule { }
