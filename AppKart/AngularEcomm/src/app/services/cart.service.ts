import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cartItems: CartItem[] = [];

  /**
   * Subject is a subclass of Observable. 
   * We can use subject to publish evernts
   * This event will be sent to all of the subscribers
   */
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem) {
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if (this.cartItems.length > 0) {
      //Checking if item already exists in the cart.
      /*for(let tempCartItem of this.cartItems){
        if(tempCartItem.id === theCartItem.id){
          existingCartItem = tempCartItem;
          break;
        }
      }*/
      //Optimized code.
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);

      alreadyExistsInCart = (existingCartItem != undefined);
    }

    if (alreadyExistsInCart) {
      //so we need to increment
      existingCartItem.quantity++;
    }
    else {
      this.cartItems.push(theCartItem);
    }

    //Compute total price and quantity
    this.computeCartTotals();

  }
  decrementQuantity(theCartItem: CartItem) {
    theCartItem.quantity--;
    if (theCartItem.quantity == 0) {
      this.remove(theCartItem);
    }
    else {
      this.computeCartTotals();
    }
  }
  remove(theCartItem: CartItem) {
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id === theCartItem.id);

    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals();
    }
  }
  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCarItem of this.cartItems) {
      totalPriceValue += currentCarItem.quantity * currentCarItem.unitPrice;
      totalQuantityValue += currentCarItem.quantity;
    }

    //Publish the new values. All the subscribers will receive the change
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }
}
