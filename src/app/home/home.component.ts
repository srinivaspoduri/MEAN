import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/getProduct.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public slides=  ['https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Black_friday/GW/Updated/talhero_1500x600._CB414379446_.jpg','https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/November/Heroes/WithoutBunting/realmebudsclassic/pc-1x._CB415354809_.jpg','https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Banners/GW_1500x600-min._CB406905169_.jpg','https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg'
  ,'https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg',
 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/17thNov/RV1/Tallhero_1500x600._CB415341732_.jpg',
 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Luggage/nov/ATF/Unrec/GW_PC_BUNK_luggage1500x600._CB415364628_.jpg']
  ;
  public records:any=[];
  public showinGrid:any=[];
  constructor(public productsservice : ProductsService,public route:Router) { }

  ngOnInit(): void {
  

  //   //subscribing the observable as getEmployees is observable
  //  this.productsservice.getallProducts().subscribe((posRes) => {

  //     console.log("pos resonse received " + posRes)
  //     this.records = posRes.products;
  //     var lengths = this.records.length;
  //     for(let i=0;i<10;i++)
  //     {
  //       let value = Math.floor(Math.random()*(lengths-1-0) +0);
  //       console.log("show in Grid value "+value + " element "+this.records[value])
  //     this.showinGrid.push(this.records[value])
  //   }
  //   console.log("show in Grid"+this.showinGrid)
  //   }, (errRes) => {
  //     console.log("err resonse received " + errRes.body)
  //     this.records = errRes;
  //   })


    this.productsservice.getCategoryProducts("HomeApp").subscribe((posRes) => {

      console.log("pos resonse received " + posRes)
      this.records = posRes.products;
      var lengths = this.records.length;
      for(let i=0;i<4;i++)
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

    this.productsservice.getCategoryProducts("Fashion").subscribe((posRes) => {

      console.log("pos resonse received " + posRes)
      this.records = posRes.products;
      var lengths = this.records.length;
      console.log("fashion")
      for(let i=0;i<4;i++)
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

    this.productsservice.getCategoryProducts("Mobile").subscribe((posRes) => {

      console.log("pos resonse received " + posRes)
      this.records = posRes.products;
      var lengths = this.records.length;
      console.log("fashion")
      for(let i=0;i<4;i++)
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

    this.productsservice.getCategoryProducts("Laptops").subscribe((posRes) => {

      console.log("pos resonse received " + posRes)
      this.records = posRes.products;
      var lengths = this.records.length;
      console.log("fashion")
      for(let i=0;i<4;i++)
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
  LoadSubCategory(showinGrid:any)
  {
  //  console.log(searchItem);
    this.route.navigate(['/subproducts/'],{ queryParams: { catagory: `${showinGrid}`} });

  }

}
