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
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes =[
  {path: '', redirectTo: "customers", pathMatch: "full"},
  //pathMatch jest tutaj potrzebny bo inaczej każda ścieżka by tutaj pasowała (wszak każdy string zawiera w sobie pusty string)
  {path: '**', component: NotFoundComponent} //gwiazdki oznaczają że routa zstanie zastosowana do wszystkich ścieżek które nie zostaly zdefiniowane
  //w tym przypadku ** przekieruja nas do komponentu gdy wpisany adres nie ma odzwierciedlenia w istniejących routach 
  //np. gdy ktos się pomyli i zamiast customers wpisze kustomers
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
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
