import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/services/getProduct.service';
@Component({
  selector: 'app-subproduct',
  templateUrl: './subproduct.component.html',
  styleUrls: ['./subproduct.component.css']
})
export class SubproductComponent implements OnInit {

  
  public ServerData:any;
  constructor(public route:ActivatedRoute,public productsservice: ProductsService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((data)=>{
      console.log("****"+data);
      this.productsservice.getSubCategoryProducts(data.catagory).subscribe((posRes)=>{

        this.ServerData= posRes.products;
      },(errRes)=>{

        console.log("err resonse received " + errRes.body)
      this.ServerData = errRes;
      })
      
  });


}
}
