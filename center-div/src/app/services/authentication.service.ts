import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLogedIn: boolean = false;
  email: string = "email@email.com";
  password: string = "password";

  constructor() {}

  getIsLogedIn() {
    return this.isLogedIn;
  }

  checkLoginData(email: string, password: string): void {
    this.isLogedIn = (this.email === email && this.password === password);
  }

}
