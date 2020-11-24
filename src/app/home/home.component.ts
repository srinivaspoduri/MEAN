import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/getProduct.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public records:any=[];
  public showinGrid:any=[];
  constructor(public productsservice : ProductsService) { }

  ngOnInit(): void {
  

    //subscribing the observable as getEmployees is observable
   this.productsservice.getallProducts().subscribe((posRes) => {

      console.log("pos resonse received " + posRes)
      this.records = posRes.products;
      var lengths = this.records.length;
      for(let i=0;i<10;i++)
      {
        let value = Math.floor(Math.random()*(lengths-1-0) +0);
        console.log("show in Grid value "+value + " element "+this.records[value])
      this.showinGrid.push(this.records[value])
    }
    console.log("show in Grid"+this.showinGrid)
    }, (errRes) => {
      console.log("err resonse received " + errRes.body)
      this.records = errRes;
    })
    
   
  }

}
