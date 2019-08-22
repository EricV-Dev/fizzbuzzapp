import { Component, OnInit } from "@angular/core";

import { AdminService } from "../services/admin.service";

import { HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.css"]
})
export class CreateUserComponent implements OnInit {
  constructor(
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
  combindedUsers = [];

  currentURL: string;
  ogUser: string;
  ogPassword: string;
  ogAdmin: boolean;
  delete = false;

  ngOnInit() {
    this.adminService.getAdminData().subscribe(data => {
      for (let value of Object.values(data)) {
        this.combindedUsers.push(value.user);
      }
    });
  }

  createUser() {
    this.createdUser = {
      index: this.combindedUsers.length + 1,
      user: this.userNameForm,
      password: this.updatedPassword,
      admin: this.ogAdmin
    };

    if (this.combindedUsers.indexOf(this.userNameForm) !== -1) {
      this.toastr.warning("Username Already Taken", "Create A Unique Username");
    }
    if (this.userNamePassword != this.updatedPassword) {
      this.toastr.warning("Passwords Do Not Match!");
      this.ogPassword;
    } else {
      this.http

        .post(this.adminService.CREATE_USER_URL, this.createdUser, {
          observe: "response"
        })

        .subscribe(response => this.createdUser);
    }
  }
}
