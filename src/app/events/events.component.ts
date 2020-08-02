import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../domain/event';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers: [EventService]
})
export class EventsComponent implements OnInit {

  public upcomingEvents: Event[];
  public pastEvents: Event[];

  constructor(private http: HttpClient, private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getAllUpcomingEvents().subscribe(res => {
      this.upcomingEvents = res;
    });

    this.eventService.getAllPastEvents().subscribe(res => {
      this.pastEvents = res;
    });
  }

}
