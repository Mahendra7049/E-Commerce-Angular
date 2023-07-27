import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login, signUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
//   invaliduserAuth=new EventEmitter<boolean>(false)

//   constructor( private http:HttpClient,private router:Router) { }
//   userSign(user:signUp){
//     // console.warn(user)
// this.http.post("http://localhost:3000/user",user,{observe:'response'})
// .subscribe((result)=>{
//   if(result){
//     localStorage.setItem('user',JSON.stringify(result.body))
//     this.router.navigate(['/']);
//   }
// })

//   }

//   userAuthReload(){
//     if(localStorage.getItem('user')){
//       this.router.navigate(['/'])
//     }
//   }

//   // userLogin(data:login){
//   //   this.http.get<signUp[]>(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,{observe:'response'})
//   //   .subscribe((result:any)=>{
//   //     if(result && result.body){
//   //       localStorage.setItem('user',JSON.stringify(result.body[0]))
//   //       this.router.navigate(['/']);
//   //     }

//   //   })
//   // }
//   userLogin(data:login){
//     console.warn(data)
//     this.http.get<signUp[]>(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
//    {observe:'response'}
//    ).subscribe((result)=>{
//     if(result && result.body?.length ){
//          this.invaliduserAuth.emit(false)
//       localStorage.setItem('user',JSON.stringify(result.body))
//     this.router.navigate(['/']);
//     }else{
//       this.invaliduserAuth.emit(true)
//     }
//     // this.issellerLoggedIn.next(true);
    
//    })

//   }
invalidUserAuth= new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private router:Router) { }
  userSignUp(user:signUp){
   this.http.post('http://localhost:3000/user',user,{observe:'response'})
   .subscribe((result)=>{
    if(result){
      localStorage.setItem('user',JSON.stringify(result.body));
      this.router.navigate(['/']);
    }
    
   })
    
  }
  userLogin(data:login){
    this.http.get<signUp[]>(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
    {observe:'response'}
    ).subscribe((result)=>{
      if(result && result.body?.length){
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        this.router.navigate(['/']);
        this.invalidUserAuth.emit(false)
      }else{
        this.invalidUserAuth.emit(true)
      }
    })
  }

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/']);
    }
  }
}
