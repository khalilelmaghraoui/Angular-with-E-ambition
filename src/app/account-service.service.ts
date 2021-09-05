import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statuUpdated = new EventEmitter<string>();
  accountCreated = new EventEmitter<string>();

  constructor(private login: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.login.addAccount();
  }

  updateStatu(id: number, statu: string) {
    this.accounts[id].status = statu;
    this.login.logStatu(statu);
  }
}
