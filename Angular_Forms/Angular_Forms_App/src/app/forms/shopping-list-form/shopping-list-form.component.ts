import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ShoppingListServiceService } from '../../services/shopping-list-service.service';

@Component({
  selector: 'app-shopping-list-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shopping-list-form.component.html',
  styleUrl: './shopping-list-form.component.scss',
})
export class ShoppingListFormComponent {
  constructor(private shoppingListService: ShoppingListServiceService) {}

  onAddItem(form: NgForm) {
    const value = form.value;
    console.log(value.name);
    console.log(value.amount);
    this.shoppingListService.addIngredient({
      name: value.name,
      amount: value.amount,
    });

    console.log(this.shoppingListService.getIngredients());
  }
}
