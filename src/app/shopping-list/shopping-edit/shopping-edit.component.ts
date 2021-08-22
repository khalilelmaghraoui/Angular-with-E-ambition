import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

  @Output() ingrediantAdded = new EventEmitter<Ingredient>();

  amount = [];

  constructor() {}

  ngOnInit() {}
  onDeleteItem() {}
  onClearItem() {}
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const addIngrediant = new Ingredient(ingName, ingAmount);
    this.ingrediantAdded.emit(addIngrediant);
  }
}
