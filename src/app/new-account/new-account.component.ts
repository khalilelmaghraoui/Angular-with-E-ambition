import { Component, EventEmitter, Output } from '@angular/core';
import { AccountServiceService } from '../account-service.service';
import { AccountComponent } from '../account/account.component';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(
    private logginInjection: LoggingService,
    private accountInjection: AccountServiceService
  ) {
    this.accountInjection.statuUpdated.subscribe((status: string) =>
      alert('new statu' + status)
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountInjection.addAccount(accountName, accountStatus);
    this.logginInjection.logStatu(accountName);
    this.accountInjection.accountCreated.subscribe(alert('new Account'));

    // const service = new LoggingService();
    // service.logStatu(accountName)
  }
}
