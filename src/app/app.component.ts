import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  usuario ={
    email: '',
    password: ''
  }

  constructor(private authService: AuthService){

  }

  Login(){
    console.log(this.usuario);

    const{email, password}= this.usuario;

    this.authService.register(email, password).then(res => {
      console.log("se ha registrado", res)
    })
  }

  // LoginGoogle(){
  //   console.log(this.usuario);

  //   const{email, password}= this.usuario;

  //   this.authService.loginGoogle(email, password).then(res => {
  //     console.log("se ha registrado", res)
  //   })
  // }
}
