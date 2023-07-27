import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// popularProduct:undefined|product[];
// trendytProduct:undefined|product[];
//   constructor(private product:ProductService) {}
//    ngOnInit(){

//     this.product.popularProduct().subscribe((data:any)=>{

//       this.popularProduct=data;

//     })
//     this.product.trendy().subscribe((data:any)=>{
//       this.trendytProduct=data;
//     })
//    }
popularProducts:undefined|product[];
trendyProducts:undefined | product[];
 constructor(private product:ProductService) {}

 ngOnInit(): void {
   this.product.popularProducts().subscribe((data)=>{
     this.popularProducts=data;
   })

   this.product.trendyProducts().subscribe((data)=>{
     this.trendyProducts=data;
   })
 }
}

