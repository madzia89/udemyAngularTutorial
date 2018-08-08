import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from '../contract.service';
import { Contract } from '../model';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
})
export class ContractDetailsComponent implements OnInit {
  contract: Contract

  constructor(
    private contractService:ContractService,
    private activatedRoute: ActivatedRoute
    //ActivatedRoute reprezentuje aktywną w routerze ścieżkę. ma w sobie params
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      //wewnątrz funkcji strzałkowej params jest słownikiem tj. prosty obiekt javascriptowy, możemy się do niego dobierać za pomoca nawiasów kwadratowych
      const id = parseInt(params['id']) //parseInt zamienia stringa z params na liczbę
      // 'id' odwołuje się do id zdefiniowanego w ścieżce routy czyli to id jest tym samym co id w roucie contracts/:id
      this.contractService.getContract(id).subscribe(contract => {
        this.contract = contract
        //tutaj zapisujemy umowę do zmiennej powyżej w komponencie
      })
    })
    //params jest observable tzn. dopiero zostanie stworzone
  }

}
