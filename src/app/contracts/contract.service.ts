import { Injectable, Inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CONFIG, Config} from '../model'
import { Contract } from './model'

@Injectable()
export class ContractService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) {}

  getCustomers(){
    return this.httpClient.get<Contract[]>(`${this.config.apiUrl}/contracts`)
  }
}
