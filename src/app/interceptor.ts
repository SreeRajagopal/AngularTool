// import { Injectable, NgModule } from '@angular/core';
// import { HttpResponse, HttpErrorResponse, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { Observable, Subject, pipe } from 'rxjs';
// import { map, takeUntil, tap } from 'rxjs/operators';

// @Injectable()
// export class HttpsRequestInterceptor implements HttpInterceptor {
//     constructor() { }
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         const newReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ')});
//         return next.handle(newReq).map((event: HttpEvent<any>) => {
//             if (event instanceof HttpResponse) {
//                 // do stuff with response
//             }
//         }, (err: any) => {
//             if (err instanceof HttpErrorResponse) {
//             }
//         });
//     }
// }
// @NgModule({
//     providers: [
//         { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }
//     ]
// })
// export class InterceptorModule { }
