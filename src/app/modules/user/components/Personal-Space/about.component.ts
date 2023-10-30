import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {faClock, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgFor, NgIf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [
    MatCardModule,
    MatIconModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    NgIf,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule
  ],
  standalone: true
})

export class AboutComponent implements OnInit {
  faClock = faClock;
  faSearch = faSearch;
  user = "Sainath";
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  bookings = []
  constructor() {}

  ngOnInit(): void {}
}
