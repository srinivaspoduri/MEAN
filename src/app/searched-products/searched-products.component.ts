import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/services/getProduct.service';


@Component({
  selector: 'app-searched-products',
  templateUrl: './searched-products.component.html',
  styleUrls: ['./searched-products.component.css']
})
export class SearchedProductsComponent implements OnInit {

  public catagory:any;
  public SearchResult:any;
  public allProducts:any[];
  constructor(private route: ActivatedRoute,public productsservice:ProductsService)
     { }

  ngOnInit():void {
    this.route.queryParams.subscribe((searchItem)=>{
        console.log("****"+searchItem.catagory);
        this.catagory=searchItem.catagory;
        this.productsservice.getSubCategoryProducts(searchItem.catagory).subscribe((posRes)=>{

          this.SearchResult= posRes.products;
        },(errRes)=>{
  
          console.log("err resonse received " + errRes.json)
        this.SearchResult = errRes;
        })

    })
  }

}
