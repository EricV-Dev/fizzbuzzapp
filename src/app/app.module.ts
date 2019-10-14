import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { RunappComponent } from "./fizzbuzz/fizzbuzz.component";
import { HomeComponent } from "./home/home.component";
import { FizzBuzzResult } from "./services/fizzbuzz.service";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth-guard.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FizzbuzzInterceptorService } from "./services/fizzbuzz-interceptor.service";
import { ToastrModule } from "ngx-toastr";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AdminComponent } from "./admin/admin.component";
import { UserdetailComponent } from "./userdetail/userdetail.component";
import { MatDialogModule } from "@angular/material";
import { MaterialModule } from "./material.module";
import { ModalComponent } from "./modal/modal.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SqlAdminComponent } from "./sqlData/sql-admin/sql-admin.component";
import { SqlcreateuserComponent } from "./sqlData/sqlcreateuser/sqlcreateuser.component";
import { SqlUserDetailComponent } from "./sqlData/sql-user-detail/sql-user-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RunappComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    UserdetailComponent,
    ModalComponent,
    CreateUserComponent,
    SqlAdminComponent,
    SqlcreateuserComponent,
    SqlUserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({ positionClass: "toast-top-center" }),
    MatDialogModule,
    MaterialModule,
    NgbModule
  ],
  providers: [
    FizzBuzzResult,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FizzbuzzInterceptorService,
      multi: true
    }
  ],

  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule {}
