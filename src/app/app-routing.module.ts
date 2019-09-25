import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RunappComponent } from "./fizzbuzz/fizzbuzz.component";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { UserdetailComponent } from "./userdetail/userdetail.component";
import { AuthGuard } from "./services/auth-guard.service";
import { AdminComponent } from "./admin/admin.component";
import { SqlAdminComponent } from "./sqlData/sql-admin/sql-admin.component";
import { SqlcreateuserComponent } from "./sqlData/sqlcreateuser/sqlcreateuser.component";
import { RoleGuard } from "./services/role-guard.service";
import { CreateUserComponent } from "./create-user/create-user.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "", component: AppComponent },
  { path: "login", component: LoginComponent },
  { path: "runapp", component: RunappComponent, canActivate: [AuthGuard] },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [RoleGuard]
  },
  {
    path: "userdetail/:index",
    component: UserdetailComponent,
    canActivate: [RoleGuard]
  },
  {
    path: "createUser",
    component: CreateUserComponent,
    canActivate: [RoleGuard]
  },
  {
    path: "sqladmin",
    component: SqlAdminComponent,
    canActivate: [RoleGuard]
  },
  {
    path: "createUserSql",
    component: SqlcreateuserComponent,
    canActivate: [RoleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
