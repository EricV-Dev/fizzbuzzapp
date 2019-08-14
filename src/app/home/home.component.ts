import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  token;
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  test() {
    this.auth.sendToken("token active");
    this.auth.sendAdminToken("admin token active");
  }
}
