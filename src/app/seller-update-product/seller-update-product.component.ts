import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  productData:undefined|product;
  productmessge:undefined|string;

  constructor(private route:ActivatedRoute,private product:ProductService) {}

  ngOnInit(){
    let productId=this.route.snapshot.paramMap.get('id')
    console.warn(productId);
    productId && this.product.getProduct(productId).subscribe((result)=>{
       console.warn(result)
       this.productData=result;
    })
  }

  update(data:product){
    if(this.productData){
      data.id=this.productData.id
    }
    this.product.updateProduct(data).subscribe((result)=>{
    if(result){
      this.productmessge="product has updated";
    }
    })
    setTimeout(()=>{
      this.productmessge=undefined;
    },3000)

  }
}
