import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { StreamViewerComponent } from './components/stream-viewer/stream-viewer.component';
import { PhotosContainerComponent } from './components/photos-container/photos-container.component';
import { GalleryComponent } from './components/gallery/gallery.component';


@NgModule({
  declarations: [
    StreamViewerComponent,
    PhotosContainerComponent,
    GalleryComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule { }
