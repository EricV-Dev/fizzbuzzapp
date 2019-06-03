import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-runapp",
  templateUrl: "./runapp.component.html",
  styleUrls: ["./runapp.component.css"]
})
export class RunappComponent implements OnInit {
  fizzResult;

  apiData = [];

  fizzData: Object;

  item = [];

  constructor(private data: DataService) {}

  ngOnInit() {}

  fizzBuzz(i) {
    let retVal = "";

    let notDivBy3 = false;
    let notDivBy5 = false;

    if (i % 3 == 0) {
      retVal += "Fizz";
      notDivBy3 = true;
    }

    if (i % 5 == 0) {
      retVal += " Buzz";
      retVal = retVal.trim();
      notDivBy5 = true;
    }

    if (notDivBy3 == false && notDivBy5 == false) {
      return String(i);
    }
    return retVal;
  }

  outputFizzBuzz() {
    const fizzLoop = 36;
    let x = [];
    for (let i = 1; i <= fizzLoop; i++) {
      var resArray = this.fizzBuzz(i);
      x.push(resArray);

      this.fizzResult = x;
    }
  }

  fizzBuzzApi() {
    this.data.getFizzBuzz().subscribe(data => {
      this.fizzData = data;
      console.log(this.data);
    });
  }
}
