import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newserverName = '';
  newserverContent = '';

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  OnServerAdd() {
    this.serverCreated.emit({
      serverName: this.newserverName,
      serverContent: this.newserverContent
    });
  }
  OnbluePrintAdd() {
    this.bluePrintCreated.emit({
      serverName: this.newserverName,
      serverContent: this.newserverContent
    });
  }
  constructor() {}
  ngOnInit(): void {}
}
