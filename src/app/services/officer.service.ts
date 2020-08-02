import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Officer } from '../domain/officer';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {

  constructor(private http: HttpClient) { }

  public getOfficers(): Observable<Officer[]> {
    return this.http.get<Officer[]>('http://localhost:8080/api/officer/get-officers');
  }

}
