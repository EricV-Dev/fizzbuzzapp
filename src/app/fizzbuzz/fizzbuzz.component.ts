import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/fizzbuzz.service";
import { HttpErrorResponse } from "@angular/common/http";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-runapp",
  templateUrl: "./fizzbuzz.component.html",
  styleUrls: ["./fizzbuzz.component.css"]
})
export class RunappComponent implements OnInit {
  field = new FormControl("");

  fizzResult;

  apiData = [];

  fizzData: Object;

  fizzDataDefault: Object;

  fizzInput: String;

  constructor(private data: DataService) {}

  ngOnInit() {}

  fizzField($event) {
    this.fizzInput = "?num=" + $event.target.value;

    history.pushState(null, null, "/runapp" + this.fizzInput);
  }

  fizzClick() {
    if (this.fizzInput === undefined) {
      this.fizzInput = "?num=0";
    }
    this.data.ROOT_URL += this.fizzInput;

    this.data.getFizzBuzz().subscribe(
      data => {
        this.data.ROOT_URL = this.data.ROOT_URL.split("?")[0];
        this.fizzInput = "?num=0";
        return (this.fizzData = data);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          // we will do something here with interceptors
        } else
          alert("There was a problem with the request, please try again later");
      }
    );
    this.data.ROOT_URL = this.data.ROOT_URL;
  }

  fizzClear() {
    history.replaceState(null, null, "/runapp" + "?");
    this.field.reset();
    this.fizzData = [];
  }
}
