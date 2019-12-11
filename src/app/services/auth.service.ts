import { Injectable } from "@angular/core";

import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private myRoute: Router) {}
  LOGIN_URL = environment.loginURL;
  LOGIN_URL_ASP = environment.loginURLASP;

  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token);
    return true;
  }

  sendAdminToken(token: string) {
    localStorage.setItem("LoggedInAdmin", token);
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

  isLoggedInAdmin() {
    if (Object.values(localStorage).includes("admin token active")) {
      return true;
    }
  }

  logout() {
    localStorage.clear();
    this.myRoute.navigate(["login"]);
  }
}
