import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/Today/home.component';
import { AboutComponent } from './components/Personal-Space/about.component';
import { ServicesComponent } from './components/Find-a-Collegue/services.component';
import { ContactComponent } from './components/Visitors/contact.component';
import { VisitorsHomeComponent } from './components/visitors-home/visitors-home.component';
import { YourVisitorsComponent } from './components/your-visitors/your-visitors.component';


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
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
