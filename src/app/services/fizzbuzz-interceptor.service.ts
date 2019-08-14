import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { tap } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class FizzbuzzInterceptorService implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let ok: any;

    return next.handle(req).pipe(
      tap(
        event => (
          (ok = event instanceof HttpResponse ? "succeeded" : event),
          console.log(ok)
        ),

        // Operation failed; error is an HttpErrorResponse
        error =>
          (ok = this.toastr.error("An Error Has Occured", "Oops! Error!", {
            timeOut: 2000
          }))
      )
    );
  }
}
