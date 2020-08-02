import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../domain/event';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  public getPhotoAlbums(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:8080/api/photos/get-albums');
  }

  public getPhotosByAlbumId(albumId: string): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:8080/api/photos/get-photos/${albumId}`);
  }

}
