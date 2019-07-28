import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Data } from "src/models/data.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  ROOT_URL = "http://localhost:3000/api/admin";

  constructor(private http: HttpClient) {}

  getAdminData() {
    return this.http.get(`${this.ROOT_URL}`);
  }
}
