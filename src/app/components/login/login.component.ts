import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    MatSnackBarModule,
    ReactiveFormsModule
  ]
})
export class LoginComponent implements OnInit {
  faLock = faLock;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe({
        next: (data) => {
          this.auth.setUserData(data);
          this._snackBar.open("Success!", "OK");
          this.router.navigate(['/user/home']);
        },
        error: (err) => {
          console.error(err)
          if (err.status === 404) {
            this._snackBar.open("Invalid credentials!", "OK");
          }
        },
        complete: () => { }
      });
    }
  }
}