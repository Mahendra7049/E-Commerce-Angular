import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchComponent } from './search/search.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthGuard } from './seller-auth.guard';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'',
  },
  {
    component:SellerAuthComponent,
    path:'seller-auth',
  },
  {
    component:SellerHomeComponent,
    path:'seller-home',
    canActivate:[SellerAuthGuard]
  },
  {
    component:SellerAddProductComponent,
    path:'seller-add-product',
    // canActivate:[SellerAuthComponent]
  },
  {
    component:SellerUpdateProductComponent,
    path:'update-product/:id',
    // canActivate:[SellerAuthComponent]
  },{
    component:SearchComponent,
    path:'search/:query'
  },{
    component:ProductDetailComponent,
    path:'detail/:productId'
  },{
    component:UserAuthComponent,
    path:'user-auth',
  },{
    component:CartPageComponent,
    path:'cart',
  },{
    component:CheckoutComponent,
    path:'checkout'
  },{
    component:MyOrdersComponent,
    path:'order',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
