import { Component, OnInit } from "@angular/core";
import { AdminService } from "../services/admin.service";
import { Router } from "@angular/router";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { MatDialog } from "@angular/material";
import { ModalComponent } from "../modal/modal.component";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-userdetail",
  templateUrl: "./userdetail.component.html",
  styleUrls: ["./userdetail.component.css"]
})
export class UserdetailComponent implements OnInit {
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

  currentURL: string;
  ogUser: string;
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
    this.adminData();
  }

  adminData() {
    console.log(window.location.pathname);
    this.id = this.currentURL = window.location.pathname;
    this.id = this.id.substr(12);

    this.adminService.getAdminData().subscribe(data => {
      this.userData = data;
      this.userData = this.userData[this.id];

      this.ogUser = this.userData.user;
      this.userNameForm = this.ogUser;
      this.ogPassword = this.userData.password;
      this.ogAdmin = this.userData.admin;

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
      user: this.ogUser,
      password: this.ogPassword,
      admin: this.ogAdmin,
      passChanged: this.passChanged,
      userChanged: this.userChanged
    };

    this.http

      .post(this.adminService.UPDATE_USER_URL, this.updatedUser, {
        observe: "response"
      })

      .subscribe(
        response => {
          this.router.navigate(["/admin"]);
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
      index: this.id,
      delete: this.delete
    };
    this.http
      .post(this.adminService.DELETE_ROOT_URL, this.updatedUser, {
        observe: "response"
      })
      .subscribe(response => this.router.navigate(["/admin"]));
  }
}
