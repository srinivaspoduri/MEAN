import { Component, OnInit } from '@angular/core'
import {MatTableDataSource } from "@angular/material/table"
import {TooltipPosition} from '@angular/material/tooltip';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/services/getProduct.service';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { ProductDetailsDialogComponent } from './Dialog/ProductDetailsDialogComponent.component';
@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  //providers: [NgbCarouselConfig] 
})

export class productsComponent implements OnInit {
  public records: any;
  public dataSource:MatTableDataSource<any>;
  public displayedColumns:string[]= ["ID","CATEGORY","SUB","BRAND","PRICE","ITEMCOUNT","IMAGE","ACTIONS"];
 public  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
 public slides=  ['https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/November/Heroes/WithoutBunting/realmebudsclassic/pc-1x._CB415354809_.jpg','https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Banners/GW_1500x600-min._CB406905169_.jpg','https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg'
 ,'https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg',
'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/17thNov/RV1/Tallhero_1500x600._CB415341732_.jpg',
'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Luggage/nov/ATF/Unrec/GW_PC_BUNK_luggage1500x600._CB415364628_.jpg']
 ;
  constructor(public productsservice: ProductsService ,config: NgbCarouselConfig,public dialog:MatDialog) { 
    config.interval = 1000;
    config.keyboard = true;
    config.pauseOnHover = true;

  }

  ngOnInit(): void {
  

    //subscribing the observable as getEmployees is observable
   /* this.productsservice.getallProducts().subscribe((posRes) => {

      console.log("pos resonse received " + posRes)
      this.records = posRes.products;
    }, (errRes) => {
      console.log("err resonse received " + errRes.body)
      this.records = errRes;
    })
    */
  }
  CategoryProducts(category): void {

    this.productsservice.getCategoryProducts(category).subscribe((posRes) => {

      console.log("pos resonse received " + posRes)
      this.records = posRes.products;
      this.dataSource=new MatTableDataSource(this.records);
    }, (errRes) => {
      console.log("err resonse received " + errRes.body)
      this.records = errRes;
     
    })
  }

  AllProducts(): void {

    this.productsservice.getallProducts().subscribe((posRes) => {

      console.log("pos resonse received " + posRes)
      this.records = posRes.products;
      this.dataSource=new MatTableDataSource(this.records);
    }, (errRes) => {
      console.log("err resonse received " + errRes.body)
      this.records = errRes;
    
    })
  }
  openDialog(datax)
  {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = datax;
    this.dialog.open(ProductDetailsDialogComponent,dialogConfig)

  }
  ShowTable()
  {
    if (document.getElementById("displaytable").style.display === "none")
    {
    document.getElementById("displaytable").style.display="block";
    document.getElementById("displaygrid").style.display="none";
    }
else
    document.getElementById("displaytable").style.display="none";
  }
  displaygrid()
{
  
    if (document.getElementById("displaygrid").style.display === "none")
    {
    document.getElementById("displaygrid").style.display="block";
    document.getElementById("displaytable").style.display="none";
    }
else
    document.getElementById("displaygrid").style.display="none";
  }

}


