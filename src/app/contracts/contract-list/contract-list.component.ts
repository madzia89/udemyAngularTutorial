import { Component, OnInit } from '@angular/core'
import { ContractService } from '../contract.service'
import { Contract } from '../model'


@Component({
  selector: 'ctr-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract[]

  constructor(private contractService: ContractService) { }

  ngOnInit() {
    this.contractService.getCustomers().subscribe(contracts => {
      this.contracts = contracts
    })
  }

}
