import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  ROOT_URL = environment.adminURL;

  constructor(private http: HttpClient) {}

  getAdminData() {
    return this.http.get(`${this.ROOT_URL}`);
  }
}
