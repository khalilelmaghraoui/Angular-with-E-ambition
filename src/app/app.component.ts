import { Component } from '@angular/core';
import { Event } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  category = 'recipe';

  onNavigate(categ: string) {
    this.category = categ;
  }
}
