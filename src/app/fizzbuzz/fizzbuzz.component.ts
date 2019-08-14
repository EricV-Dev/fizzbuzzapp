import { Component, OnInit } from "@angular/core";
import { FizzBuzzResult } from "../services/fizzbuzz.service";
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

  fizzDefault = "?num=0";

  constructor(private fizzBuzzResult: FizzBuzzResult) {}

  ngOnInit() {}

  fizzField($event) {
    this.fizzInput = "?num=" + $event.target.value;

    history.pushState(null, null, "/runapp" + this.fizzInput);
  }

  fizzClick() {
    if (this.fizzInput === undefined) {
      this.fizzInput = this.fizzDefault;
    }

    this.fizzBuzzResult.ROOT_URL += this.fizzInput;

    this.fizzBuzzResult.getFizzBuzz().subscribe(data => {
      this.fizzBuzzResult.ROOT_URL = this.fizzBuzzResult.ROOT_URL.split("?")[0];
      return (this.fizzData = data);
    });
    this.fizzBuzzResult.ROOT_URL = this.fizzBuzzResult.ROOT_URL;
  }

  fizzClear() {
    history.replaceState(null, null, "/runapp" + "?");
    this.field.reset();
    this.fizzData = [];
    this.fizzInput = this.fizzDefault;
  }
}
