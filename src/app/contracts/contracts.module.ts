import { NgModule } from '@angular/core';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractService } from './contract.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ContractListComponent],
  providers: [ContractService],
  exports: [ContractListComponent]
})
export class ContractsModule { }


//po stworzeniu modułu trzeba go zaimportować w app.module.ts