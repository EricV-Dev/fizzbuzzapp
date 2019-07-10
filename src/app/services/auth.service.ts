import { Injectable } from "@angular/core";

import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private myRoute: Router) {}
  LOGIN_URL = environment.loginURL;

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
