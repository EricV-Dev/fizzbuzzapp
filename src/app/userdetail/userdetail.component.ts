import { Component, OnInit } from "@angular/core";
import { AdminService } from "../services/admin.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-userdetail",
  templateUrl: "./userdetail.component.html",
  styleUrls: ["./userdetail.component.css"]
})
export class UserdetailComponent implements OnInit {
  users;
  userData;
  userNameForm;
  id;

  updatedUser: object;
  updatedPassword: string;
  userNamePassword: any;
  passChanged = false;

  currentURL: string;
  ogUser: string;
  ogPassword: string;
  ogAdmin: boolean;
  switchStatus: boolean;

  openPass: boolean;
  constructor(private adminService: AdminService, private http: HttpClient) {}

  ngOnInit() {
    this.adminData();
  }

  adminData() {
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
    }

    if (this.userNamePassword != this.updatedPassword) {
      alert("passwords do not match");
      this.ogPassword;
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
      passChanged: this.passChanged
    };
    this.http
      //change to env variable
      .post(this.adminService.ROOT_URL, this.updatedUser, {
        observe: "response"
      })

      .subscribe(response => this.updatedUser);
  }
}
