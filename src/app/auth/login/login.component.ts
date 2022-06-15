import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  

  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(''),
  });

  constructor(private authSvc: AuthService,private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('usuario')) {
      this.router.navigate(['/']);
    }
  }

  onLogin() {
    const { email, password } = this.loginForm.value;
    this.authSvc.login(email!, password!);
  }
}
