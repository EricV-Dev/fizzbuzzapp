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
  ROOT_URL_EXPRESS = environment.adminURL_SQL_Express;

  UPDATE_USER_URL = environment.updateUser;
  UPDATE_USER_URL_SQL = environment.updateUserSQL;
  UPDATE_USER_URL_EXPRESS = environment.updateUserExpress;

  DELETE_ROOT_URL = environment.deleteURL;
  DELETE_USER_URL_SQL = environment.deleteUserSQL;
  DELETE_USER_URL_EXPRESS = environment.deleteUserExpress;

  CREATE_USER_URL = environment.createUser;
  CREATE_USER_URL_SQL = environment.createUserSQL;
  CREATE_USER_URL_EXPRESS = environment.createUserExpress;

  constructor(private http: HttpClient) {}

  getAdminData() {
    return this.http.get(this.ROOT_URL);
  }

  getSqlAdminDataExpress() {
    return this.http.get(this.ROOT_URL_EXPRESS);
  }

  getSqlAdminData() {
    return this.http.get(this.ROOT_URL_SQL);
  }
}
