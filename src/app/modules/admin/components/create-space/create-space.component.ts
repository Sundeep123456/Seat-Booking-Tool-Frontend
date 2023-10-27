import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { faClock, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient, HttpHeaders } from '@angular/common/http';



interface SpaceType {
  value: string;
  viewValue: string;
}




@Component({
  selector: 'app-create-space',
  templateUrl: './create-space.component.html',
  styleUrls: ['./create-space.component.scss'],
  standalone: true,
  imports: [MatSidenavModule, FooterComponent, SidebarComponent, RouterModule, HeaderComponent,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    NgFor,
    MatIconModule,
    FontAwesomeModule,
    FormsModule,
    MatInputModule,
    MatSelectModule
  ],
})
export class CreateSpaceComponent implements OnInit {
  faClock = faClock;
  faSearch = faSearch;
  spaceTypes: SpaceType[] = [
    { viewValue: "Cabin", value: "cabin" },
    { viewValue: "Cubicle", value: "cubicle" },
    { viewValue: "Work Station", value: "workstation" },
    { viewValue: "IT Room", value: "itroom" }
  ];
  spaceType: String = "";
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void { }


  submitForm(): void {

    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type':'application/json;charset=UTF-8'
      })
    }

    const workspace = (document.getElementById("workspaceInput") as HTMLInputElement)?.value;
    const floors = (document.getElementById("floorsInput") as HTMLInputElement)?.value;
    // const spacetype = (document.getElementById("spacetypeInput") as HTMLSelectElement)?.value;
    const location = (document.getElementById("locationInput") as HTMLInputElement)?.value;

    const data = {
      workspace,
      floors,
      spaceType: this.spaceType,
      location
    };
    const formData =  new FormData();
    Object.keys(data).forEach(e => formData.append(e, (data as any)[e]))

    this.httpClient.post("http://localhost:5296/Space/Create",formData , httpOptions).subscribe({
      next: (data) => console.log("Data: ",data),
      error: (err) => console.error(err),
      complete: () => console.log("completed")
    });
  }

}
