import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { faClock, faSearch } from "@fortawesome/free-solid-svg-icons";
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatInputModule } from '@angular/material/input';




interface SpaceType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  standalone:true,
  imports:[
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    FontAwesomeModule,
    MatInputModule
  ]
})
export class ServicesComponent implements OnInit {
  faClock = faClock;
  faSearch = faSearch;
  
constructor() {}
  ngOnInit(): void {}


  findColleague(): void {
  }
}
