import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
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
  constructor(private route: ActivatedRoute,public productsservice:ProductsService, private router:Router)
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
  ShowDetails(ProductInfo:any) {
    //console.log("products component"+ProductInfo.img)
  
    console.log(Object.values(ProductInfo));
  this.router.navigate(['/productdetails/'], { queryParams: ProductInfo });
  }

}
