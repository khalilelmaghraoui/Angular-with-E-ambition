import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: ['']
  // styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  bottonStatue = false;
  bottonCreation = 'botton creation';
  bottonText = ' ';
  color = '';

  constructor() {
    setTimeout(() => {
      this.bottonStatue = true;
    }, 2000);
  }

  onCreateBotton() {
    this.bottonCreation = 'botton has beeon created';
  }

  getBottonStatue() {
    return this.bottonStatue;
  }

  onBottonText(event: any) {
    this.bottonText = event.target.value;
  }
  colorM() {
    return (this.color = 'green');
  }

  ngOnInit(): void {}
}
