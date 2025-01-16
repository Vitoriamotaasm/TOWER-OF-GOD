import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;

  constructor(private auth: Auth, private router: Router) {
    this.user$ = user(this.auth);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut (this.auth) .then (() => {
      this.router.navigate(['/login']);
    })
  }
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  getUser(): Observable<any> {
    return this.user$;
  }
}


