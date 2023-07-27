import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private route:Router,private product:ProductService) {}
  menuType:string='default';
  sellerName:string='';
  searchele:undefined|product[];
  userName:string="";
  cartItem=0;

  ngOnInit():void{
    
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller')&& val.url.includes('seller')){
          console.warn("area of seller")
          this.menuType='seller';
          if(localStorage.getItem('seller')){
            let sellerStorage=localStorage.getItem('seller')
            let sellerData=sellerStorage && JSON.parse(sellerStorage)[0];
            this.sellerName=sellerData.name;
            this.menuType='seller'
          }

        }else if(localStorage.getItem('user')){
          let userStore=localStorage.getItem('user');
          let userData=userStore && JSON.parse(userStore);
          this.userName=userData.name;
          this.menuType='user'

        }else{
          this.menuType="default"
        }
      }
    })
    let cartData= localStorage.getItem('localCart');
    if(cartData){
      this.cartItem= JSON.parse(cartData).length
    }
    this.product.cartData.subscribe((items)=>{
      this.cartItem= items.length
    })
  }
  login(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }
  userLogout(){
    localStorage.removeItem('user');
    this.route.navigate(['user-auth']);
    this.product.cartData.emit([]);
  }


  search(query:KeyboardEvent){
    if(query){
      const element=query.target as HTMLInputElement;
     this.product.searchProduct(element.value).subscribe((data)=>{
    if(data.length>5){
      data.length=5;    
    }  

     this.searchele=data;
     })
    }
  }
  hideSearch(){
    this.searchele=undefined;
  }
  submitSearch(val:string){
    this.route.navigate([`search/${val}`])

  }
  redirectToDetail(val:number){
    this.route.navigate([`/detail/`+val]);

  }
  
}
