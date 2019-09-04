import { Component, OnInit } from "@angular/core";
import { AdminService } from "../services/admin.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  openform;
  users: any;
  userData: Object;

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.adminData();
  }

  adminData() {
    this.adminService.getAdminData().subscribe(data => {
      return (this.userData = data);
    });
  }
}
