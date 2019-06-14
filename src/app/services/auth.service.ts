import { Injectable } from "@angular/core";

import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private myRoute: Router) {}

  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token);
    return true;
  }

  getToken() {
    return localStorage.getItem("LoggedInUser");
  }

  isLoggedIn() {
    if (Object.values(localStorage).includes("token active")) {
      return true;
    }
  }

  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["login"]);
  }
}
