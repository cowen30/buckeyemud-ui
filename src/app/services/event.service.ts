import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Event } from '../domain/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  public getAllUpcomingEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:8080/api/events/get-all-upcoming-events');
  }

  public getAllPastEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:8080/api/events/get-all-past-events');
  }

  public getEventById(eventId: string): Observable<Event> {
    return this.http.get<Event>(`http://localhost:8080/api/events/get-event/${eventId}`);
  }

}
