import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
})
export class ContractDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
    //ActivatedRoute reprezentuje aktywną w routerze ścieżkę. ma w sobie params
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      //wewnątrz funkcji strzałkowej params jest słownikiem tj. prosty obiekt javascriptowy, możemy się do niego dobierać za pomoca nawiasów kwadratowych
      const id = parseInt(params['id']) //parseInt zamienia stringa z params na liczbę
      // 'id' odwołuje się do id zdefiniowanego w ścieżce routy czyli to id jest tym samym co id w roucie contracts/:id
    })
    //params jest observable tzn. dopiero zostanie stworzone
  }

}
