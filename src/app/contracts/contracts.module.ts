import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractService } from './contract.service';

@NgModule({
  imports: [
    CommonModule //moduł z podstawowymi funkcjonalnościami angularowymi
  ],
  declarations: [ContractListComponent],
  providers: [ContractService],
  exports: [ContractListComponent]
})
export class ContractsModule { }


//po stworzeniu modułu trzeba go zaimportować w app.module.ts