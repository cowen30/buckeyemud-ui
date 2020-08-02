import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { PhotosComponent } from './photos.component';


const routes: Routes = [
  { path: '', component: PhotosComponent },
  { path: ':eventId', component: AlbumComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
