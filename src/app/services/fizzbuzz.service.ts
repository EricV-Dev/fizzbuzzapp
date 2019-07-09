import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Data } from "src/models/data.model";

@Injectable({
  providedIn: "root"
})
export class FizzBuzzResult {
  ROOT_URL = "https://still-river-42657.herokuapp.com/api/fizzBuzz";

  constructor(private http: HttpClient) {}

  getFizzBuzz() {
    return this.http.get<Data[]>(`${this.ROOT_URL}`);
  }
}
