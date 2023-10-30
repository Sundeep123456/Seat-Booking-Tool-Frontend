import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {  RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [
    MatExpansionModule,
    RouterModule
  ]
})
export class SidebarComponent {

}
