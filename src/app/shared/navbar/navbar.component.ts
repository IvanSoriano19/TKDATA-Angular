import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {

  public isLogged : boolean;
  public usuario : any;


  constructor(private authSvc: AuthService, private router : Router) {
    this.isLogged = false;
  }

  ngOnInit(): void {
    this.usuarioLogeado();
  }

  usuarioLogeado(){
    this.authSvc.getCurrentUser().subscribe(res =>{
      if (res != null) {
        this.isLogged = true;
        this.usuario = res;
      } else {
        this.isLogged = false;
      }
    });
  }

  logOut(): void{
    this.authSvc.logout().then(res => {
      this.isLogged = false;
      this.router.navigate(["/"]);
    });
  }

}
