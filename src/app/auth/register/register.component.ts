import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    repeat_password: new FormControl(''),
    nombre: new FormControl(''),
  });

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  onRegister() {
    const { email, password } = this.registerForm.value;
    this.authSvc.register(email!, password!);
  }

}
