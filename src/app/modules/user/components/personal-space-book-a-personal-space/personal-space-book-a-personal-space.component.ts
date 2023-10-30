import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { BookingData, SlotTime, SlotData } from 'src/app/models/BookingData';

import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";

import {WeekComponent} from "src/app/modules/user/components/week/week.component";
import { SearchFilter } from 'src/app/models/SearchFilter';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table';




interface Space {
  id: string
  floor: string
  spaceType: string
  location: string
  country: string
}

@Component({
  selector: 'app-personal-space-book-a-personal-space',
  templateUrl: './personal-space-book-a-personal-space.component.html',
  styleUrls: ['./personal-space-book-a-personal-space.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    NgFor,
    MatSelectModule,
    WeekComponent,
    MatTableModule,
    NgIf
  ]
})
export class PersonalSpaceBookAPersonalSpaceComponent {

  object = Object;

  displayedColumns: string[] = [
    'id',
    'spaceType',
    'floor',
    'location',
    'country',
    'actions'
  ];

  dataSource: Space[] = [];

  countryIndex: string = "India";
  locationIndex :string = "";
  groupIndex :string = "";
  floorIndex :string = "";
  workspaceTypeIndex :string = "";
  searchFilter: SearchFilter | null = null;

  countries: string[] = ["India"]
  locations: string[] = []
  workspaceTypes: string[] = []
  floors: string[] = []

  fetchData(params: any): Observable<any> {
    return this.httpClient.get("http://192.168.1.19:8080/Space/Filter", {
      params
    })
  }

  fetchWorkspaceTypes() {
    this.workspaceTypeIndex = "";
    this.floorIndex = "";
    this.floors = [];
    this.fetchData({
      "country": this.countryIndex,
      "location": this.locationIndex
    }).subscribe({
      next: (resp) => {
        this.workspaceTypes = resp as string[]
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  fetchFloors() {
    this.floorIndex = "";
    this.floors = []
    this.fetchData({
      "country": this.countryIndex,
      "location": this.locationIndex,
      "spaceType": this.workspaceTypeIndex
    }).subscribe({
      next: (resp) => {
        this.floors = resp as string[]
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  fetchSpaces() {
    this.fetchData({
      "country": this.countryIndex,
      "location": this.locationIndex,
      "spaceType": this.workspaceTypeIndex,
      "floor": this.floorIndex
    }).subscribe({
      next: (resp) => {
        this.dataSource = resp;
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  constructor(private httpClient: HttpClient) {
    this.fetchData({
      "country": this.countryIndex
    }).subscribe({
      next: (resp) => {
        this.locations = resp as string[]
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  filterChangeHandler(filter: SearchFilter) {
    this.searchFilter = filter;
  }
}
