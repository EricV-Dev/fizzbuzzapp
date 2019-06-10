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

  fizzInput: String;

  constructor(private data: DataService) {}

  ngOnInit() {}

  fizzField($event) {
    this.fizzInput = "?num=" + $event.target.value;

    history.pushState(null, null, "/runapp" + this.fizzInput);
  }

  buttonClick() {
    this.data.ROOT_URL = this.data.ROOT_URL + this.fizzInput;

    this.data.getFizzBuzz().subscribe(
      data => {
        this.data.ROOT_URL = "http://localhost:3000/api/fizzBuzz";
        return (this.fizzData = data);
      },
      (error: Response) => {
        if (error.status === 404) {
          alert("Please Enter Value");
          window.location.reload();
        } else
          alert("There was a problem with the request, please try again later");
      }
    );
  }
}
