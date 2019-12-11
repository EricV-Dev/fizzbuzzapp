import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  fizzUser;
  fizzPass;

  model;

  user: [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  userLogin() {
    let fizzUserPass = {
      user: this.fizzUser,
      password: this.fizzPass,
      database: this.model
    };

    if (this.model != "ASP") {
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
    } else
      this.http
        .post(`${this.auth.LOGIN_URL_ASP}`, fizzUserPass, {
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
