import {NgModule} from '@angular/core';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractService} from './contract.service';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '../../../node_modules/@angular/router';
import {ContractDetailsComponent} from './contract-details/contract-details.component';
import {ContractResolver} from "./contract-resolver.service";

const routes = [
  {
    path: ':id',  //tutaj slash przed nr id sam się dodaje!!!!
    //powyżej i poniżej jest tylko część linka do routy bo pierwsza część tego linka zawarta została zdefniowana w lazy routingu
    component: ContractDetailsComponent,
    resolve: {
      contract: ContractResolver
    }
  },
  {path: '', component: ContractListComponent}
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContractListComponent, ContractDetailsComponent],
  providers: [
    ContractService,
    ContractResolver
  ],
  exports: [ContractListComponent]
})
export class ContractsModule {
}


//po stworzeniu modułu trzeba go zaimportować w app.module.ts
