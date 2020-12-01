import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from "@angular/material/table"
import { TooltipPosition } from '@angular/material/tooltip';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/services/getProduct.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsDialogComponent } from './Dialog/ProductDetailsDialogComponent.component';
@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  //providers: [NgbCarouselConfig] 
})

export class productsComponent implements OnInit {
  public records: any;
  public dataSource: MatTableDataSource<any>;
  public displayedColumns: string[] = ["ID", "CATEGORY", "SUB", "BRAND", "PRICE", "ITEMCOUNT", "IMAGE", "ACTIONS"];
  public positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];

  constructor(public productsservice: ProductsService, config: NgbCarouselConfig, public dialog: MatDialog,private router:Router, private route: ActivatedRoute) {
    config.interval = 1000;
    config.keyboard = true;
    config.pauseOnHover = true;

  }

  ngOnInit(): void {


    //subscribing the observable as getEmployees is observable
    //  this.productsservice.getallProducts().subscribe((posRes) => {

    //     console.log("pos resonse received " + posRes)
    //     this.records = posRes.products;
    //   }, (errRes) => {
    //     console.log("err resonse received " + errRes.body)
    //     this.records = errRes;
    //   })
    ////
    

    this.route.queryParams.subscribe((searchItem) => {
      console.log("$$$$$$$$$$$" + searchItem.catagory);
      this.productsservice.getCategoryProducts(searchItem.catagory).subscribe((posRes) => {

        this.records = posRes.products;
        console.log("$$$$$$$$$$$" + this.records);
        this.dataSource = new MatTableDataSource(this.records);
      }, (errRes) => {

        console.log("err resonse received " + errRes.json)
        this.records = errRes;
      })

    })
   



  }

  
  openDialog(datax) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = datax;
    this.dialog.open(ProductDetailsDialogComponent, dialogConfig)

  }
  ShowTable() {
    if (document.getElementById("displaytable").style.display === "none") {
      document.getElementById("displaytable").style.display = "block";
      document.getElementById("displaygrid").style.display = "none";
    }
    else
      document.getElementById("displaytable").style.display = "none";
  }
  displaygrid() {

    if (document.getElementById("displaygrid").style.display === "none") {
      document.getElementById("displaygrid").style.display = "block";
      document.getElementById("displaytable").style.display = "none";
    }
    else
      document.getElementById("displaygrid").style.display = "none";
  }

  ShowDetails(ProductInfo:any) {
      //console.log("products component"+ProductInfo.img)

      console.log(Object.values(ProductInfo));
  this.router.navigate(['/productdetails/'], { queryParams: ProductInfo });
  }

  
}


