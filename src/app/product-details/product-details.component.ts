import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductsService } from 'src/services/getProduct.service';
import { SelectedProductService } from 'src/services/SelectedProduct.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public ServerData: any;
  public showinGrid:any=[];
  constructor(public activeroute: ActivatedRoute, public productsservice: ProductsService, public router:Router,
    public seletedproservice:SelectedProductService) { }
  public selectedproductdetails: any;
  ngOnInit(): void {

    this.activeroute.queryParams.subscribe((selectedproductdetails) => {

      this.selectedproductdetails = selectedproductdetails;
      console.log("****" + selectedproductdetails);
    })



    this.productsservice.getSubCategoryProducts(this.selectedproductdetails.subcategory).subscribe((posRes) => {

      
      this.ServerData = posRes.products;
      var lengths = this.ServerData.length;
      while(this.showinGrid.length < 8)
      {
        let value = Math.floor(Math.random()*(lengths-1-0) +0);
        //console.log("show in Grid value "+value + " element "+this.ServerData[value])
        if(this.showinGrid.indexOf(value) === -1)
      this.showinGrid.push(this.ServerData[value])
    }
    }, (errRes) => {

      console.log("err resonse received " + errRes.body)
      this.ServerData = errRes;


    });


  }
  ShowDetails(ProductInfo:any) {
    //console.log("products component"+ProductInfo.img)
  
    console.log(Object.values(ProductInfo));
  this.router.navigate(['/productdetails/'], { queryParams: ProductInfo });

  this.activeroute.queryParams.subscribe((selectedproductdetails) => {

    this.selectedproductdetails = selectedproductdetails;
    console.log("****" + selectedproductdetails);
  })
  }
  
  AddtoCart(item)
  {
    console.log('in add to cart method'+item)
    this.seletedproservice.add(item);
  }
  
}
