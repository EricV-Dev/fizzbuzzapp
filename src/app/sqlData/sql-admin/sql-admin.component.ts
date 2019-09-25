import { Component, OnInit } from "@angular/core";
import { AdminService } from "../../services/admin.service";

import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-sql-admin",
  templateUrl: "./sql-admin.component.html",
  styleUrls: ["./sql-admin.component.css"]
})
export class SqlAdminComponent implements OnInit {
  openform;
  users: any;
  userData: Object;

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.sqladminData();
  }

  sqladminData() {
    this.adminService.getSqlAdminData().subscribe(data => {
      return (this.userData = data);
    });
  }
}
