import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  passInput = new FormControl("");
  fizzUser;
  fizzPass;
  fizzUserPass;
  user: [];

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
      .post(`${this.auth.LOGIN_URL}`, this.fizzUserPass, {
        observe: "response"
      })

      .subscribe(
        response => {
          this.auth.sendToken("token active");
          this.router.navigate(["/"]);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.passInput.reset();
          }
        }
      );
  }
}
