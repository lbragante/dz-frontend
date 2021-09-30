import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "./service/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (localStorage.getItem('token')) {
            let token = localStorage.getItem('token');
            const authReq = req.clone({
                setHeaders: {
                    Authorization: token
                }
            });
            return next.handle(authReq).pipe(catchError((error) => {
                console.log('Error', error);

                if (error instanceof HttpErrorResponse) {
                    if (error.status === 401) {
                        this.authService.logout();
                        this.router.navigateByUrl('/auth/login');
                    }
                }
                return throwError(error);
            }));
        }
        return next.handle(req);
    }
}
