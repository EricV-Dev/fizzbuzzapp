import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-runapp",
  templateUrl: "./runapp.component.html",
  styleUrls: ["./runapp.component.css"]
})
export class RunappComponent implements OnInit {
  fizzResult;
  item = [];

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
      return String(i);
    }
    return retVal;
  }

  outputFizzBuzz() {
    let x = [];
    for (let i = 1; i <= 36; i++) {
      var resArray = this.fizzBuzz(i);
      x.push(resArray);

      this.fizzResult = x;
    }
  }
}

//   fizzBuzz() {
//     let x = [];
//     for (let i = 1; i <= 14; i++) {
//       let retVal = "";
//       let notDivBy3 = false;
//       let notDivBy5 = false;

//       if (i % 3 == 0) {
//         retVal += "Fizz";
//         notDivBy3 = true;
//         x.push(retVal);
//       }

//       if (i % 5 == 0) {
//         retVal += " Buzz";
//         retVal = retVal.trim();
//         notDivBy5 = true;
//         x.push(retVal);
//       }

//       if (notDivBy3 == false && notDivBy5 == false) {
//         x.push(i);
//       }
//     }
//     return x;
//   }

//   outputFizzBuzz() {
//     this.fizzResult = this.fizzBuzz();
//     console.log(this.fizzResult);
//   }
//
