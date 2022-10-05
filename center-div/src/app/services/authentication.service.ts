import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLogedIn: boolean = false;

  constructor() {}

  getIsLogedIn() {
    return this.isLogedIn;
  }
}
