import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { RunappComponent } from "./runapp/runapp.component";
import { HomeComponent } from "./home/home.component";
import { DataService } from "./data.service";

@NgModule({
  declarations: [AppComponent, NavComponent, RunappComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataService],

  bootstrap: [AppComponent]
})
export class AppModule {}
