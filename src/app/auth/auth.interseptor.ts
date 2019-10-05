
import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserService } from "../shared/user.service";
//import 'rxjs/add/operator/do';
import { of } from 'rxjs';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private router:Router){
        console.log("In Interceptor");
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //throw new Error("Method not implemented.");
        if (req.headers.get('No-Auth') == "True")
        return next.handle(req.clone());

    if (localStorage.getItem('userToken') != null) {
        const clonedreq = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
        });
        // return next.handle(clonedreq)
        //     .do(
        //     succ => { },
        //     err => {
        //         if (err.status === 401)
        //             this.router.navigateByUrl('/login');
        //     }
        //     );
    }
    else {
        this.router.navigateByUrl('/login');
    }
}
    
}