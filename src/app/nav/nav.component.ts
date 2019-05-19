import { Component, OnInit } from "@angular/core";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  myApp: string = "Fizz Buzz App";

  constructor() {}

  ngOnInit() {}
}