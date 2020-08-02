import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosRoutingModule } from './photos-routing.module';
import { AlbumComponent } from './album/album.component';
import { NgxMasonryModule } from 'ngx-masonry';



@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    NgxMasonryModule
  ]
})
export class PhotosModule { }
