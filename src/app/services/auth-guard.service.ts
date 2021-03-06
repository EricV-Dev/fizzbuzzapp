import { Injectable } from "@angular/core";

import { CanActivate, Router } from "@angular/router";

import { AuthService } from "./auth.service";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if (this.auth.isLoggedIn()) return true;
    this.router.navigate(["/login"]);
  }
}
