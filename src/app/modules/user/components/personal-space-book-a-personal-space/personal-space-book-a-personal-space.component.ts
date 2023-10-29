import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { BookingData, SlotTime, SlotData } from 'src/app/models/BookingData';

import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";

import {WeekComponent} from "src/app/modules/user/components/week/week.component";
import { SearchFilter } from 'src/app/models/SearchFilter';




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
    WeekComponent
  ]
})
export class PersonalSpaceBookAPersonalSpaceComponent {

  object = Object;

  Data: BookingData = {
    "India": {
      "Banglore-t1": {
        "Cabin": {
          "3": {
            "Desk": {
              "M": [
                SlotTime.AM
              ]
            }
          }
        }
      },
      "Banglore-t2": {
        "Cabin": {
          "3": {
            "Desk": {
              "M": [
                SlotTime.AM
              ]
            }
          }
        }
      }
    }
  };

  jsonData: string = JSON.stringify(this.Data)

  countryIndex: string = "";
  locationIndex :string = "";
  groupIndex :string = "";
  floorIndex :string = "";
  workspaceTypeIndex :string = "";
  searchFilter: SearchFilter | null = null;


  initializeData(data: BookingData): void {
    this.countryIndex = Object.keys(data)[0];
    this.locationIndex = Object.keys(data[this.countryIndex])[0];
    this.groupIndex = Object.keys(data[this.countryIndex][this.locationIndex])[0];
    this.floorIndex = Object.keys(data[this.countryIndex][this.locationIndex][this.groupIndex])[0];
    this.workspaceTypeIndex = Object.keys(data[this.countryIndex][this.locationIndex][this.groupIndex][this.floorIndex])[0];
  }

  constructor() {
    this.initializeData(this.Data);
  }

  filterChangeHandler(filter: SearchFilter) {
    this.searchFilter = filter;
  }
}
