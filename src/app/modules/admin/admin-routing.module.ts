import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/Today/home.component';
import { CreateSpaceComponent } from './components/create-space/create-space.component';
import {UsersComponent} from './components/users/users.component'
import {VisitorsComponent} from './components/visitors/visitors.component'

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
    { path: 'create-space', component: CreateSpaceComponent },
    
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
      
      {path: 'users', component: UsersComponent},

      {path : 'visitors', component: VisitorsComponent}
    ],

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
