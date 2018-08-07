import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpUserEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpErrorResponse } from "../../node_modules/@angular/common/http";
import { Observable } from "../../node_modules/rxjs";
import { MessageService } from "./message.service";
import { catchError } from "rxjs/operators"
import { Injectable } from "../../node_modules/@angular/core";

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor{
    constructor(private messageService: MessageService){}

    //httpInterceptor pozwala wpić się w obsługę każdego z zapytań httpClient, możemy coś dzięki temu dodac np. do nagłówków albo właśnie do wykrycia błędu
    intercept(req: HttpRequest<any>, next: HttpHandler): 
    //req obiekt opisujący rzadanie http
    //next jest zdolny do przetwarzania naszego requestu i to next jest za to odpowiedzialne
    Observable<HttpSentEvent | HttpHeaderResponse | 
    HttpProgressEvent | HttpResponse<any> |HttpUserEvent<any>>{
        // throw new Error("Method not implemented.")
        console.log(req)
        return next.handle(req).pipe(catchError(error=>{
            if(error instanceof HttpErrorResponse){
                this.messageService.error(`jest błąd ${error.message}`)
            }
            return Observable.throw(error || 'error')
            //Observable.throw zwróci jeden observable który wyemituje tylko jedno zdarzenie błędu z informacją o błędzie
        }))
        //handle na obiekcie next sprawi przetworzenie requestu, wyoływane są kolejne metody z łańcucha
        //gdy chcemy coś zrobić po nadejściu odpwowiedzi 
    }

}