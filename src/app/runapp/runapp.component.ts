import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-runapp",
  templateUrl: "./runapp.component.html",
  styleUrls: ["./runapp.component.css"]
})
export class RunappComponent implements OnInit {
  fizzResult = "this.fizzResult";

  constructor() {}

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
      return i;
    }
    return retVal;
  }

  outputFizzBuzz() {
    for (let i = 1; i <= 36; i++) {
      let fizzResult = [this.fizzBuzz(i)];
      console.log(fizzResult);
    }
  }
}
