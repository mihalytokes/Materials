import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {
  materials:any;
  newmaterial:any={};
  columns:any=["Name","Colour","Thickness","Fireproofclass","Supplier"];
  showerror=false;
  errorMessage="";
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
  
  createMaterial(body:any){
    this.baseService.create(body).then()
    .catch(err=>{this.showerror=true; this.errorMessage=err.message});
  }
  updateMaterial(body:any){
    this.baseService.update(body.key, body).then()
    .catch(err=>{this.showerror=true; this.errorMessage=err.message});
  }
  deleteMaterial(body:any){
    this.baseService.delete(body.key).then()
    .catch(err=>{this.showerror=true; this.errorMessage=err.message});
  }
}
