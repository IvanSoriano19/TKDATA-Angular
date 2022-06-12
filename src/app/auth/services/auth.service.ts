import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '@firebase/auth';
import { Auth } from '@firebase/auth';

@Injectable()

export class AuthService {

  // public user: User;

  constructor(public afAuth: AngularFireAuth) { }

  login(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }


  logout(){
    return this.afAuth.signOut();
  }

  getCurrentUser(){
    return this.afAuth.authState;
  }
}
