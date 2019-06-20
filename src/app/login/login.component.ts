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
  fizzUserPass;
  user: [];
  LOGIN_URL = "http://localhost:3000/api/login";

  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  userField($event) {
    let user = $event.target.value;

    this.fizzUser = user;
  }

  passField($event) {
    let password = $event.target.value;
    this.fizzPass = password;

    this.fizzUserPass = { user: this.fizzUser, password: this.fizzPass };
  }

  userLogin() {
    this.http
      .post(`${this.LOGIN_URL}`, this.fizzUserPass, {
        observe: "response"
      })

      .subscribe(
        response => {
          response.status === 200;
          console.log("200 success");
          this.auth.sendToken("token active");
          this.router.navigate(["/"]);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            alert("401 error");
          }
        }
      );
  }
}
