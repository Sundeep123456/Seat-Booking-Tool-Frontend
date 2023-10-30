import { AuthService } from './../../../../services//auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule
  ],
  standalone: true
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  logout(): void {
    this.auth.logout();
  }
  
}