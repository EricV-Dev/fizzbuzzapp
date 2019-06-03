import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Data } from "src/models/data.model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  ROOT_URL = "http://localhost:3000/api/fizzBuzz";
  constructor(private http: HttpClient) {}

  getFizzBuzz() {
    return this.http.get<Data[]>(`${this.ROOT_URL}/datas`);
  }
}
