import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Material } from './material';
import { BehaviorSubject } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  order:Item[]=[];
  orders=new BehaviorSubject(this.order)
    
  getOrder(){
    this.orders.next(this.order);
    return this.orders;
  }
  addItemToOrders(item:Item){
      this.order.push(item)
  }

  sendOrderEmail(){

  }

  referencia: AngularFireList<Material>
    constructor(private db: AngularFireDatabase) {
      this.referencia=db.list("/material");
     }

     getAll(){
      return this.referencia
     }

     create(body:any){
      return this.referencia.push(body);
     }

     update(key:string, body:any){
      return this.referencia.update(key, body);
     }

     delete(key:string){
      return this.referencia.remove(key);
     }

     deleteOrderItem(item:Item){
      console.log("before delete",Item,this.order)
      this.order=this.order.filter((x:Item)=>x!=item);
      console.log("after delete,",this.order)
      this.orders.next(this.order)
     }

    }