import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RunappComponent } from "./fizzbuzz/fizzbuzz.component";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "", component: AppComponent },
  { path: "login", component: LoginComponent },
  { path: "runapp", component: RunappComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
