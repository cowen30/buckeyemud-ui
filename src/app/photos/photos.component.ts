import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotosService } from '../services/photos.service';
import { Event } from '../domain/event';
import { Moment } from 'moment-timezone';
import * as moment from 'moment';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  providers: [PhotosService]
})
export class PhotosComponent implements OnInit {

  public albums: Event[];
  public unavailable = false;

  constructor(private http: HttpClient, private eventService: PhotosService) { }

  ngOnInit(): void {
    try {
      this.eventService.getPhotoAlbums().subscribe(res => {
        for (const event of res) {
          const date: Moment = event.date;
          event.date = moment(moment(date).format('MMMM D, YYYY'));
        }
        this.albums = res;
        if (this.albums.length < 1) {
          this.unavailable = true;
        }
      });
    } catch (e) {
      this.unavailable = true;
      console.log(e);
    }
  }

}
