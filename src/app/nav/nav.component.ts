import { Component, OnInit } from "@angular/core";
import { EventEmitterService } from "../event-emitter.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  logoutNav = false;
  openAdmin = false;
  myApp: string = "Fizz Buzz App";

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  onLoginShowLogout() {
    if (Object.values(localStorage).includes("token active")) {
      this.logoutNav = true;
      return this.logoutNav;
    } else {
      return false;
    }
  }

  onClickShowAdmin() {
    if (Object.values(localStorage).includes("admin token active")) {
      this.openAdmin = true;
      return this.openAdmin;
    } else {
      return false;
    }
  }

  logout() {
    this.auth.logout();
  }
}
