import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';



export class interceptorservice implements HttpInterceptor{
 intercept(req: HttpRequest<any> , next: HttpHandler){
     
   let modifiedrequest = req.clone({url: 'http://localhost:5000/api/v1/ratings' + req.url });
   return next.handle(modifiedrequest);
 }
}