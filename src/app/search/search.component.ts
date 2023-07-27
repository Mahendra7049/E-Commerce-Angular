import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResult:undefined|product[];
  constructor(private activroute:ActivatedRoute,private product:ProductService){}

  ngOnInit(){
    let query= this.activroute.snapshot.paramMap.get('query')
    console.warn(query);
    query && this.product.searchProduct(query).subscribe((result)=>{
   this.searchResult=result;
   
    })

  }

}
