import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { faClock, faSearch } from "@fortawesome/free-solid-svg-icons";
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss'],
  standalone:true,
  imports:[
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
  ]
})
export class VisitorsComponent {
  displayedColumns: string[] = ['name', 'booking', 'company', 'country', 'location', 'arrivalTime'];
  visitors: any[] = [
    { name: 'Visitor 1', booking: 'Booking 1', company: 'Company A', country: 'Country X', location: 'Location 1', arrivalTime: '9:00 AM' },
    { name: 'Visitor 2', booking: 'Booking 2', company: 'Company B', country: 'Country Y', location: 'Location 2', arrivalTime: '10:30 AM' },
    { name: 'Visitor 3', booking: 'Booking 3', company: 'Company C', country: 'Country Z', location: 'Location 3', arrivalTime: '2:45 PM' },
    // Add more visitors as needed
  ];
}
