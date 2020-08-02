import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../domain/person';
import { Observable } from 'rxjs';
import { OfficerService } from '../services/officer.service';
import { Officer } from '../domain/officer';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [OfficerService]
})
export class AboutComponent implements OnInit {

  public officers: Officer[];

  constructor(private http: HttpClient, private officerService: OfficerService) { }

  ngOnInit(): void {
    this.officerService.getOfficers().subscribe(res => {
      this.officers = res;
    });
  }

}
