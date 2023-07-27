import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent {
  
  addproductmessage:string|undefined;
  constructor(private product: ProductService) {}
  add(data: product) {
    console.warn(data);
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if(result){
        this.addproductmessage="product was sucessfully removed";
        setTimeout(()=>(this.addproductmessage=undefined),3000);
      }
    });
  }
}
