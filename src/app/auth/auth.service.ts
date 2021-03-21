import { Injectable,NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from './user';

//@Injectable({
  //providedIn: 'root'
//})
// export  class  AuthService {
//     constructor() {

//     }
// }


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(public afAuth: AngularFireAuth, public router: Router,public ngZone: NgZone) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })

  }

  async login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
          this.ngZone.run(() => {
          console.log(result);
          this.router.navigate(['/main']);
        });

      }).catch((error) => {
        window.alert(error.message)
      })
  }


  async register(email: string, password: string) {
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password)
    this.sendVerificationMail();
  }

  sendVerificationMail() {
    return this.afAuth.currentUser.then(user => user?.sendEmailVerification())
    .then(() => {
      window.alert('Please verify your email');
    })
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }

  async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['admin/login']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }


}


