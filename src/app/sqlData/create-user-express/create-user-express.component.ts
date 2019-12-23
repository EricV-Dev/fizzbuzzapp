import { Component, OnInit } from "@angular/core";
import { AdminService } from "../../services/admin.service";
import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-create-user-express",
  templateUrl: "./create-user-express.component.html",
  styleUrls: ["./create-user-express.component.css"]
})
export class CreateUserExpressComponent implements OnInit {
  constructor(
    private router: Router,
    private adminService: AdminService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  userNameForm;
  createdUser: Object;
  id;

  updatedPassword: string;
  userNamePassword: any;
  passChanged = false;

  currentURL: string;
  ogUser: string;
  ogPassword: string;
  ogAdmin: boolean;
  delete = false;

  ngOnInit() {}

  createUser() {
    this.createdUser = {
      user: this.userNameForm,
      password: this.updatedPassword,
      admin: this.ogAdmin
    };

    if (this.userNamePassword != this.updatedPassword) {
      this.toastr.warning("Passwords Do Not Match!");
      this.ogPassword;
      return;
    }

    this.http

      .post(this.adminService.CREATE_USER_URL_EXPRESS, this.createdUser, {
        observe: "response"
      })

      .subscribe(
        response => {
          this.router.navigate(["/expressadmin"]);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 403) {
            this.toastr.warning(
              "Username Already Taken",
              "Create A Unique Username"
            );
          }
        }
      );
  }
}
