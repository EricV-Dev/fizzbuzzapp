import { Component, OnInit } from "@angular/core";
import { AdminService } from "../services/admin.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  users: any;
  userData: Object;

  constructor(private adminService: AdminService) {}

  ngOnInit() {}

  adminData() {
    this.adminService.getAdminData().subscribe(data => {
      console.log(data);
      return (this.userData = data);
    });
  }
}
