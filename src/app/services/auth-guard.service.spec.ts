import { AuthGuard } from "./auth-guard.service";

class MockRouter {
  navigate(path) {}
}

describe("AuthGuard", () => {
  describe("canActivate", () => {
    let authGuard: AuthGuard;
    let authService;
    let router;

    it("should return true for a logged in user", () => {
      authService = { isLoggedIn: () => true };
      router = new MockRouter();
      authGuard = new AuthGuard(authService, router);

      expect(authGuard.canActivate()).toEqual(true);
    });

    it("should navigate to login for a logged out user", () => {
      authService = { isLoggedIn: () => false };
      router = new MockRouter();
      authGuard = new AuthGuard(authService, router);
      spyOn(router, "navigate");

      expect(authGuard.canActivate()).toEqual(undefined);
      expect(router.navigate).toHaveBeenCalledWith(["/login"]);
    });
  });
});
