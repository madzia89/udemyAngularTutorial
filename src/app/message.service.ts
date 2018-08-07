import { Injectable } from '@angular/core';
import { ToastrService } from '../../node_modules/ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastrService: ToastrService) { }

  success(msg: string){
    this.toastrService.success(msg)
  }
}