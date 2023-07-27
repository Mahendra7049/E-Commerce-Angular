import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { login, signUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private seller:SellerService,private router:Router){}
  showLogin=false;
  authError:string='';
  ngOnInit():void{
    this.seller.reloadSeller()
  }
  signUp(data:signUp):void{
    this.seller.usersignUp(data)
  }

  login(data:login):void{
    console.warn(data)
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((error)=>{
      if(error){
        this.authError="Email or password is not correct";

      }
    })
  }

  

  openLogin(){
    this.showLogin=true;

  }
  openSignup(){
    this.showLogin=false;

  }

}
