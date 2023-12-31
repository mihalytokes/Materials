import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
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
  
}
