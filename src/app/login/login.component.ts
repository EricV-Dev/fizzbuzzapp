import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse
} from "@angular/common/http";
import { AngularWaitBarrier } from "blocking-proxy/built/lib/angular_wait_barrier";
import { AdminComponent } from "../admin/admin.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  fizzUser;
  fizzPass;

  user: [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  userLogin() {
    let fizzUserPass = { user: this.fizzUser, password: this.fizzPass };

    this.http
      .post(`${this.auth.LOGIN_URL}`, fizzUserPass, {
        observe: "response"
      })

      .subscribe(
        response => {
          if (response.body.hasOwnProperty("admin")) {
            this.auth.sendAdminToken("admin token active");
          }

          this.auth.sendToken("token active");

          this.router.navigate(["/"]);
        },

        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.fizzPass = "";
          }
        }
      );
  }
}
