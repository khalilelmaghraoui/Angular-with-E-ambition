import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() category = new EventEmitter<string>();

  onSelect(categ: string) {
    this.category.emit(categ);
  }
}
