import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  constructor() {}
  logStatu(statu: string) {
    console.log('a server statu changed , new statu ' + statu);
  }
  addAccount() {
    console.log('account created');
  }
}
