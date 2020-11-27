import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-searched-products',
  templateUrl: './searched-products.component.html',
  styleUrls: ['./searched-products.component.css']
})
export class SearchedProductsComponent implements OnInit {

  public catagory:any;
  public allProducts:any[];
  constructor(private route: ActivatedRoute)
     { }

  ngOnInit():void {
    this.route.queryParams.subscribe((searchItem)=>{
        console.log("****"+searchItem.catagory);
        this.catagory=searchItem.catagory;
        

    })
  }

}
