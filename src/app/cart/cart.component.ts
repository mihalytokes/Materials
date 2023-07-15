import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Item } from '../item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
products:any;
columns:any=["Name","Colour","Thickness","Fireproofclass","Supplier","Quantity"];

constructor(private base:BaseService){

  this.base.getOrder().subscribe(
    (datas)=>{this.products=datas; console.log("cart", this.products)}
  )
}
  deleteOrderItems(item:Item){
    this.base.deleteOrderItem(item)
  }

  sendOrder(){
  }
}
