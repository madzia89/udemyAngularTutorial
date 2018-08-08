import { NgModule } from '@angular/core';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractService } from './contract.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '../../../node_modules/@angular/router';
import { ContractDetailsComponent } from './contract-details/contract-details.component';

const routes = [
  {path: 'contracts/:id', component: ContractDetailsComponent},
  {path: 'contracts', component: ContractListComponent}
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContractListComponent, ContractDetailsComponent],
  providers: [ContractService],
  exports: [ContractListComponent]
})
export class ContractsModule { }


//po stworzeniu modułu trzeba go zaimportować w app.module.ts