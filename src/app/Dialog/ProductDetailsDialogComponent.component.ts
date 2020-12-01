import {Component, Inject, OnInit} from '@angular/core'
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'


@Component({
    selector:"productdetail-dialog",
    templateUrl:'./ProductDetailsDialogComponent.component.html'
})

export class ProductDetailsDialogComponent implements OnInit
{
    title :string="Product Details";
    description:any;
    productDetail:string;
    constructor(private dialogRef: MatDialogRef<ProductDetailsDialogComponent>,@Inject(MAT_DIALOG_DATA) data){
            //console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
           // console.log(Object.keys(data))
                                        
        this.description=data;

       
    }
        
    ngOnInit()
    {

     
    }
    dialogclose() {
        this.dialogRef.close();
    }
}