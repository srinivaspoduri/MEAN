import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductsService } from 'src/services/getProduct.service';
@Component({
  selector: 'app-subproduct',
  templateUrl: './subproduct.component.html',
  styleUrls: ['./subproduct.component.css']
})
export class SubproductComponent implements OnInit {

  
  public ServerData:any;
  constructor(public route:ActivatedRoute,public productsservice: ProductsService,private router:Router) { }

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
ShowDetails(ProductInfo:any) {
  //console.log("products component"+ProductInfo.img)

  console.log(Object.values(ProductInfo));
this.router.navigate(['/productdetails/'], { queryParams: ProductInfo });
}
}
