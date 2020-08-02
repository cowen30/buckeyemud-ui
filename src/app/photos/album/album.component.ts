import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { Event } from '../../domain/event';
import { EventService } from 'src/app/services/event.service';
import { PhotosService } from 'src/app/services/photos.service';
import { Moment } from 'moment-timezone';
import * as moment from 'moment';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  public eventId: string;
  public event: Event;
  public photos: { id: string, index: number }[] = [];
  public htmlText = '';
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private eventService: EventService,
              private photosService: PhotosService) { }

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('eventId');
    this.eventService.getEventById(this.eventId).subscribe(res => {
      this.event = res;
      const date: Moment = this.event.date;
      this.event.date = moment(date);
      console.log(this.event);
    });
    this.photosService.getPhotosByAlbumId(this.eventId).subscribe(res => {
      // this.photos = res;
      console.log(res);
      res.forEach((photo: string, index: number) => {
        this.photos.push(
          { id: photo, index }
        );
      });
    });
  }

}
