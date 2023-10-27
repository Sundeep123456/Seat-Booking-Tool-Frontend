import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/Today/home.component';
import { CreateSpaceComponent } from './components/create-space/create-space.component';



@NgModule({
  declarations: [


  ],
  imports: [
    FooterComponent,
    CommonModule,
    HomeComponent,
    HeaderComponent,
    AdminDashboardComponent,
    AdminRoutingModule,
    CreateSpaceComponent
  ]
})
export class AdminModule { }
