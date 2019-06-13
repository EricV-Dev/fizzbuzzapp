import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { RunappComponent } from "./fizzbuzz/fizzbuzz.component";
import { HomeComponent } from "./home/home.component";
import { DataService } from "./services/fizzbuzz.service";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RunappComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataService, AuthService, AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule {}
