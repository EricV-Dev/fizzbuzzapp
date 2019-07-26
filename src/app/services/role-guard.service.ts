import { Injectable } from "@angular/core";

import { CanActivate, Router } from "@angular/router";

import { AuthService } from "./auth.service";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class RoleGuard implements CanActivate {
  constructor(
    private toastr: ToastrService,
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate() {
    if (this.auth.isLoggedInAdmin()) return true;
    this.router.navigate(["/runapp"]);
    this.toastr.warning("Restricted Access", "This attempt has been logged!");
  }
}
