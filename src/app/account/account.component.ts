import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountServiceService } from '../account-service.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;

  constructor(
    private logginInjection: LoggingService,
    private accountInjection: AccountServiceService
  ) {}

  onSetTo(status: string) {
    this.accountInjection.updateStatu(this.id, status);
    this.logginInjection.logStatu(status);
    this.accountInjection.statuUpdated.emit(status);
  }
}
