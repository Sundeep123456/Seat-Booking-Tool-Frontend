import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/Today/home.component';
import { AboutComponent } from './components/Personal-Space/about.component';
import { ContactComponent } from './components/Visitors/contact.component';
import { ServicesComponent } from './components/Find-a-Collegue/services.component';
import { VisitorsHomeComponent } from './components/visitors-home/visitors-home.component';
import { YourVisitorsComponent } from './components/your-visitors/your-visitors.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    VisitorsHomeComponent,
    YourVisitorsComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
