import { Component, Input } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';
import { Item } from '../item';
import { Material } from '../material';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  materials:any;
  newmaterial:any={};
  columns:any=["Name","Colour","Thickness","Fireproofclass","Supplier"];
  showerror=false;
  errorMessage="";
  quantity:any;
  
  constructor(private baseService:BaseService){
    this.baseService.getAll().snapshotChanges().pipe(
      map(change => change.map(c=> ({
        key: c.payload.key, ...c.payload.val()
      })))
    ).subscribe({
      next:data=>this.materials=data,
      error:err=>{this.showerror=true; this.errorMessage=err.message}
    })
  }

  addOrder(material:Material, quantity:any){
    let item=new Item();
    item.material=material;
    item.quantity=quantity;
    this.baseService.addItemToOrders(item);
  }
 

}
