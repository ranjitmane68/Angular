import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IIngredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListServiceService {
  ingredientsChanged = new Subject<IIngredient[]>();

  private ingredients: IIngredient[] = [
    { name: 'chilli panner', amount: 11 },
    { name: 'chinese', amount: 30 },
  ];
  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IIngredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredient: IIngredient[]) {
    this.ingredients.push(...this.ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
