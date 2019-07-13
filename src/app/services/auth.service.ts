import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from './firebase.service';
import { from } from 'rxjs';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { reject, resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseService: FirebaseService,
    public afAuth: AngularFireAuth
  ) { }

  // untuk register user baru
  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }

  // untuk login user
  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }

  // untuk logout user
  doLogout() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signOut()
        .then(() => {
          this.firebaseService.unsubscribeOnLogOut();
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject();
        });
    })
  }

}
