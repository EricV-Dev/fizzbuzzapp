import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  openPass = false;
  ROOT_URL = environment.adminURL;
  UPDATE_USER_URL = environment.updateUser;
  DELETE_ROOT_URL = environment.deleteURL;
  CREATE_USER_URL = environment.createUser;

  constructor(private http: HttpClient) {}

  getAdminData() {
    return this.http.get(this.ROOT_URL);
  }
}
