import { Component, OnInit } from "@angular/core";
import { AdminService } from "../../services/admin.service";
import { Router } from "@angular/router";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { MatDialog } from "@angular/material";
import { ModalComponent } from "../../modal/modal.component";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-expressuserdetail",
  templateUrl: "./express-user-detail.component.html",
  styleUrls: ["./express-user-detail.component.css"]
})
export class ExpressUserDetailComponent implements OnInit {
  responseUser;

  users;
  userData;
  userNameForm;
  id;

  updatedUser: object;
  updatedPassword: string;
  userNamePassword: any;
  passChanged = false;
  userChanged = false;
  // combindedUsers = [];

  currentURL: string;
  ogUser: string;
  ogUserSend: string;
  ogPassword: string;
  ogAdmin: boolean;
  delete = false;

  openPass: boolean;
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private adminService: AdminService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.adminDataSql();
  }

  adminDataSql() {
    this.id = this.currentURL = window.location.pathname;
    this.id = this.id.substr(19);

    this.adminService.getSqlAdminDataExpress().subscribe(data => {
      this.userData = data;
      this.userData = this.userData[this.id];

      this.ogUser = this.userData.UserName; // changed casing for asp.net app previous this.userData.username
      this.ogUserSend = this.ogUser;

      this.userNameForm = this.ogUser;
      this.ogPassword = this.userData.Password;
      this.ogAdmin = this.userData.IsAdmin;

      return this.userData;
    });
  }

  updateUser() {
    if (this.ogUser != this.userNameForm) {
      this.ogUser = this.userNameForm;
      this.userChanged = true;
    } else {
      this.userChanged = false;
    }

    if (this.userNamePassword != this.updatedPassword) {
      this.toastr.warning("Passwords Do Not Match!");
      this.ogPassword;
      return;
    }

    if (
      this.userNamePassword === this.updatedPassword &&
      this.updatedPassword != undefined
    ) {
      this.ogPassword = this.userNamePassword;
      this.passChanged = true;
    }

    this.updatedUser = {
      index: this.id,
      ogUserSend: this.ogUserSend,
      user: this.ogUser,
      password: this.ogPassword,
      admin: this.ogAdmin,
      passChanged: this.passChanged,
      userChanged: this.userChanged
    };

    this.http

      .post(this.adminService.UPDATE_USER_URL_EXPRESS, this.updatedUser, {
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

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "250px",
      data: { response: this.responseUser }
    });

    dialogRef.beforeClose().subscribe(result => {
      this.responseUser = result;
      if (this.responseUser === "Delete") {
        this.deleteUser();
      }
    });
  }

  deleteUser() {
    this.delete = true;
    this.updatedUser = {
      user: this.ogUserSend,
      delete: this.delete
    };
    this.http
      .post(this.adminService.DELETE_USER_URL_EXPRESS, this.updatedUser, {
        observe: "response"
      })
      .subscribe(response => this.router.navigate(["/expressadmin"]));
  }
}
