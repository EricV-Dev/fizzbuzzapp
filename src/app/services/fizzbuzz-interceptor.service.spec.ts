import { AuthGuard } from "./auth-guard.service";
import { FizzbuzzInterceptorService } from "./fizzbuzz-interceptor.service";
import { LoginComponent } from "../login/login.component";
import { ToastrService } from "ngx-toastr";
import {
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
  HttpEvent
} from "@angular/common/http";
import { analyzeAndValidateNgModules } from "@angular/compiler";

class MockRouter {
  navigate(path) {}
}

describe("AuthGuard", () => {
  describe("canActivate", () => {
    let authGuard: AuthGuard;
    let fizzBuzzInterceptorService: FizzbuzzInterceptorService;
    let authService;
    let toastrService: ToastrService;
    let router;
    let httpHandler: HttpHandler;
    let httpErrorResponse: HttpErrorResponse;
    let httpResponse: HttpResponse<any>;
    let httpRequest: HttpRequest<any>;
    let httpEvent: HttpEvent<any>;
    let loginComponent: LoginComponent;

    it("should return true for a logged in user", () => {
      authService = { isLoggedIn: () => true };
      router = new MockRouter();
      authGuard = new AuthGuard(authService, router);

      expect(authGuard.canActivate()).toEqual(true);
    });

    it("should toast for a logged out user", () => {
      authService = { isLoggedIn: () => false };
      // fizzBuzzInterceptorService = new FizzbuzzInterceptorService(toastr);
      router = new MockRouter();
      authGuard = new AuthGuard(authService, router);

      spyOn(router, "navigate");

      expect(authGuard.canActivate()).toEqual(undefined);
      expect(router.navigate).toHaveBeenCalledWith(["/login"]);

      if (loginComponent.userLogin() === undefined) {
        expect(toastrService.error).toHaveBeenCalled;
      }
    });
  });
});
