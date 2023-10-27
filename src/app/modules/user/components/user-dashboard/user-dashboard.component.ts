import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FooterComponent} from "../footer/footer.component";
import { RouterModule  } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
  standalone: true,
  imports: [MatSidenavModule, FooterComponent, SidebarComponent, RouterModule, HeaderComponent],
})
export class UserDashboardComponent {

}
