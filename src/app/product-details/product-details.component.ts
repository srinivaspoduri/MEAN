import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(public activeroute:ActivatedRoute) { }
public selectedproductdetails:any;
  ngOnInit(): void {

    this.activeroute.queryParams.subscribe((selectedproductdetails)=>{

      this.selectedproductdetails= selectedproductdetails;
      console.log("****"+selectedproductdetails);
        })
      

  }
}
