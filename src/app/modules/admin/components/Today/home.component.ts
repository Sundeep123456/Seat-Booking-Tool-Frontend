import { Component } from '@angular/core';



import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { NgModule } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    MatSlideToggleModule,
  ],
  standalone: true
})
export class HomeComponent {

}
