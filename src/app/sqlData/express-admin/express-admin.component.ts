import { Component, OnInit } from "@angular/core";
import { AdminService } from "../../services/admin.service";

import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-express-admin",
  templateUrl: "./express-admin.component.html",
  styleUrls: ["./express-admin.component.css"]
})
export class ExpressAdminComponent implements OnInit {
  openform;
  users: any;
  userData: Object;
  pathname: string;

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.sqlExpressData();
  }

  sqlExpressData() {
    this.adminService.getSqlAdminDataExpress().subscribe(data => {
      return (this.userData = data);
    });
  }
}
