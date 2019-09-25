import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  openPass = false;
  ROOT_URL = environment.adminURL;
  ROOT_URL_SQL = environment.adminURL_SQL;
  UPDATE_USER_URL = environment.updateUser;
  DELETE_ROOT_URL = environment.deleteURL;
  CREATE_USER_URL = environment.createUser;
  CREATE_USER_URL_SQL = environment.createUserSQL;

  constructor(private http: HttpClient) {}

  getAdminData() {
    return this.http.get(this.ROOT_URL);
  }

  getSqlAdminData() {
    return this.http.get(this.ROOT_URL_SQL);
  }
}
