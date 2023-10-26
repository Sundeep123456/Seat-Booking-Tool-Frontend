import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/Today/home.component';
import { AboutComponent } from './components/Personal-Space/about.component';
import { ServicesComponent } from './components/Find-a-Collegue/services.component';
import { ContactComponent } from './components/Visitors/contact.component';
import { VisitorsHomeComponent } from './components/visitors-home/visitors-home.component';
import { YourVisitorsComponent } from './components/your-visitors/your-visitors.component';
import { PersonalSpaceHomeComponent } from './components/personal-space-home/personal-space-home.component';
import { PersonalSpaceYourBookingsComponent } from './components/personal-space-your-bookings/personal-space-your-bookings.component';
import { PersonalSpaceBookAPersonalSpaceComponent } from './components/personal-space-book-a-personal-space/personal-space-book-a-personal-space.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'visitors-home', component: VisitorsHomeComponent },
      { path: 'your-visitors', component: YourVisitorsComponent },
      { path: 'personal-space-home', component: PersonalSpaceHomeComponent},
      { path: 'personal-space-your-bookings', component:  PersonalSpaceYourBookingsComponent},
      { path: 'personal-space-book-a-personal-space', component: PersonalSpaceBookAPersonalSpaceComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
