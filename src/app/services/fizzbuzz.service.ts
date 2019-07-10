import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Data } from "src/models/data.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class FizzBuzzResult {
  ROOT_URL = environment.fizzURL;

  constructor(private http: HttpClient) {}

  getFizzBuzz() {
    return this.http.get<Data[]>(`${this.ROOT_URL}`);
  }
}
