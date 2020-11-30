import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/services/getProduct.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public ServerData: any;
  public showinGrid:any=[];
  constructor(public activeroute: ActivatedRoute, public productsservice: ProductsService) { }
  public selectedproductdetails: any;
  ngOnInit(): void {

    this.activeroute.queryParams.subscribe((selectedproductdetails) => {

      this.selectedproductdetails = selectedproductdetails;
      console.log("****" + selectedproductdetails);
    })



    this.productsservice.getSubCategoryProducts(this.selectedproductdetails.subcategory).subscribe((posRes) => {

      
      this.ServerData = posRes.products;
      var lengths = this.ServerData.length;
      for(let i=0;i<4;i++)
      {
        let value = Math.floor(Math.random()*(lengths-1-0) +0);
        console.log("show in Grid value "+value + " element "+this.ServerData[value])
      this.showinGrid.push(this.ServerData[value])
    }
    }, (errRes) => {

      console.log("err resonse received " + errRes.body)
      this.ServerData = errRes;


    });


  }
  
}
