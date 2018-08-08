import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http' //potrzebne do obsługi komunikacji z serwerem
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { ContractsModule } from './contracts/contracts.module'
import { CustomersModule } from './customers/customers.module'
import { CoreModule } from './core/core.module'
import { CustomerBrowserComponent } from './customers/customer-browser/customer-browser.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { ContractListComponent } from './contracts/contract-list/contract-list.component';

const routes: Routes =[
  {path: '', redirectTo: "customers", pathMatch: "full"},
  //pathMatch jest tutaj potrzebny bo inaczej każda ścieżka by tutaj pasowała (wszak każdy string zawiera w sobie pusty string)
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ContractsModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
