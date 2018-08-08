import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerService } from './customer.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '../../../node_modules/@angular/router';
import { AuthGuard } from '../core/auth-guard.service';
import { CustomerAddDeactivateGuard } from './customer-add-deactivate-guard.service';

const routes = [
  {path: 'customers', component: CustomerBrowserComponent},
  {path: 'customers/add', component: CustomerAddComponent, canActivate: [ AuthGuard ], canDeactivate: [CustomerAddDeactivateGuard]} //canActivate wskazuje na komponent strażnika, który chroni dostępu jeżeli zwrócono false w tamtym komponencie
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
    //tutaj forChild a nie forRoots ponieważ jesteśmy w dziecku a nie w komponencie app
  ],
  declarations: [
    CustomerAddComponent,
    CustomerDetailsComponent, //ten komponent jest uzywany tylko w CustomerBrowser dlatego go nie eksportujemy
    CustomerBrowserComponent,
  ],
  providers: [
    CustomerService
  ],
  exports: [
    CustomerAddComponent,
    CustomerBrowserComponent //exportujemy tylko te komponenty które będa używane poza tym modułem
  ]
})
export class CustomersModule { }
