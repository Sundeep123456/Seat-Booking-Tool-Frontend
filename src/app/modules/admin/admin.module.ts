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
import { PersonalSpaceHomeComponent } from './components/personal-space-home/personal-space-home.component';
import { PersonalSpaceYourBookingsComponent } from './components/personal-space-your-bookings/personal-space-your-bookings.component';
import { PersonalSpaceBookAPersonalSpaceComponent } from './components/personal-space-book-a-personal-space/personal-space-book-a-personal-space.component';



@NgModule({
  declarations: [
    ContactComponent,
    ServicesComponent,
    VisitorsHomeComponent,
    YourVisitorsComponent,
    PersonalSpaceHomeComponent,
    PersonalSpaceYourBookingsComponent,
    PersonalSpaceBookAPersonalSpaceComponent,

  ],
  imports: [
    FooterComponent,
    CommonModule,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    AdminDashboardComponent,
    AdminRoutingModule
  ]
})
export class AdminModule { }
