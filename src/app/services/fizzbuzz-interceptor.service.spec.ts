import { AuthGuard } from "./auth-guard.service";
import { FizzbuzzInterceptorService } from "./fizzbuzz-interceptor.service";
import { HttpRequest, HttpHandler } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

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

    it("should return true for a logged in user", () => {
      authService = { isLoggedIn: () => true };
      router = new MockRouter();
      authGuard = new AuthGuard(authService, router);

      expect(authGuard.canActivate()).toEqual(true);
    });

    it("should toast for a logged out user", () => {
      let toastr;
      authService = { isLoggedIn: () => false };
      // fizzBuzzInterceptorService = new FizzbuzzInterceptorService(toastr);
      router = new MockRouter();
      authGuard = new AuthGuard(authService, router);

      spyOn(router, "navigate");

      expect(authGuard.canActivate()).toEqual(undefined);
      expect(toastrService.error("An Error Has Occured", "Oops! Error!")).toBe(
        true
      );
      expect(ToastrService).toContain("An Error Has Occured", "Oops! Error!");
    });
  });
});
