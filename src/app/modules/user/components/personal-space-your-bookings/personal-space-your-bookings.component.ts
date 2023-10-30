import { Component } from '@angular/core';

//form
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from '@angular/material/table';
import { Booking } from 'src/app/models/Booking';
import { SpaceType } from 'src/app/models/SpaceType';

const ELEMENT_DATA: Booking[] = [
  {
    "workspace": "workspace",
    "type": "cabin",
    "from": "2AM",
    "to": "3AM",
    "location": "Bengaluru",
    "group": "Avation",
    "bookedFor": "Sainath",
  },
];


@Component({
  selector: 'app-personal-space-your-bookings',
  templateUrl: './personal-space-your-bookings.component.html',
  styleUrls: ['./personal-space-your-bookings.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    NgFor,
    MatButtonModule,
    MatTableModule
  ]
})
export class PersonalSpaceYourBookingsComponent {

  displayedColumns: string[] = [
    'workspace',
    'type',
    'from',
    'to',
    'location',
    'group',
    'bookedFor',
  ];
  dataSource = ELEMENT_DATA;

  workspaceTypes: SpaceType[] = [
    { viewValue: "Cabin", value: "cabin" },
    { viewValue: "Cubicle", value: "cubicle" },
    { viewValue: "Work Station", value: "workstation" },
    { viewValue: "IT Room", value: "itroom" }
  ];
  spaceType: String = "";

}
