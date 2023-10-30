import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { faClock, faSearch } from "@fortawesome/free-solid-svg-icons";
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from "@angular/material/button";




interface SpaceType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-your-visitors',
  templateUrl: './your-visitors.component.html',
  styleUrls: ['./your-visitors.component.scss'],
  standalone:true,
  imports:[
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class YourVisitorsComponent implements OnInit {
  faClock = faClock;
  faSearch = faSearch;
  
constructor() {}
  ngOnInit(): void {}


  findColleague(): void {
  }
}
