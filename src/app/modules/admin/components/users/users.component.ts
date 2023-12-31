import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatButtonModule } from "@angular/material/button";

// // icons 
// import { MatIconModule } from '@angular/material/icon';
// import { faClock, faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

// import { FormsModule } from '@angular/forms';
// import { NgFor } from '@angular/common';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone: true,

  imports: [MatSidenavModule, FooterComponent, SidebarComponent, RouterModule, HeaderComponent,
    MatCardModule,
    MatTableModule
  ],
})
export class UsersComponent {
  dataSource = []
  displayedColumns: string[] = ['id','name', 'email', 'phone'];
  users: any[] = []

  constructor(private httpClient: HttpClient) {
    this.httpClient.get("http://192.168.1.19:8080/User",{} ).subscribe({
      next: (data) => {
        this.users = data as any
      },
      error: (err) => console.error(err),
      complete: () => console.log("completed")
    });
  }

  createUser() {
    // Implement the logic for creating a user here
  }
}
