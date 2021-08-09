import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'serve', name: 'helo', content: 'helo' }];

  OnServerAdd(serverdata: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverdata.serverName,
      content: serverdata.serverContent
    });
  }
  onbluePrintAdd(bdata: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bdata.serverName,
      content: bdata.serverContent
    });
  }
  ngOnInit(): void {}
  constructor() {}
}
