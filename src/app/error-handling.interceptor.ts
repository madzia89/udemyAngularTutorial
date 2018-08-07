import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpUserEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse } from "../../node_modules/@angular/common/http";
import { Observable } from "../../node_modules/rxjs";

export class ErrorHandlingInterceptor implements HttpInterceptor{
    //httpInterceptor pozwala wpić się w obsługę każdego z zapytań httpClient, możemy coś dzięki temu dodac np. do nagłówków albo właśnie do wykrycia błędu
    intercept(req: HttpRequest<any>, next: HttpHandler): 
    //req obiekt opisujący rzadanie http
    //next jest zdolny do przetwarzania naszego requestu i to next jest za to odpowiedzialne
    Observable<HttpSentEvent | HttpHeaderResponse | 
    HttpProgressEvent | HttpResponse<any> |HttpUserEvent<any>>{
        // throw new Error("Method not implemented.")
        console.log(req)
        return next.handle(req)
    }

}