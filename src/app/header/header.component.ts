import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ProductsService } from 'src/services/getProduct.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  SearchBox = new FormControl();
  filteredOptions: Observable<string[]>;
  public searchText="";
  records: any[];
  // records: any[]=[
  //   {subctegory:"AC",category:"Home"},
  //   {subctegory:"Clothing",category:"Fashion"}

  // ];
  
  constructor(public route:Router,
    public productsservice:ProductsService) {    
    }
    getRecords():any {
      this.productsservice.getallProducts().subscribe((posRes) => {
        console.log("********* " + posRes)
       return this.records = posRes.products;
    })
  }
  ngOnInit(): void {
    this.records=this.getRecords();
     
  }
  searchItem(){
       
    this.filteredOptions = this.SearchBox.valueChanges
           .pipe(
        startWith(''),
        map(value => this._filter(this.searchText))
      );
     
    
    console.log("filtered options:"+this.filteredOptions);
  }
  private _filter(value: string): string[] {
    const filterValue = value;
     console.log("In FIlter Function"+filterValue);
    // // var lengths = this.records.length;      
    // // console.log(lengths);
    // console.log("$$$$$"+this.getRecords());
    return this.records.filter(option => option.subcategory.includes(filterValue));
  }
  displayFn(value) {
    return value;
  }
  search(searchItem:any){
    console.log(searchItem);
    
    this.route.navigate(['/searchproducts'],{ queryParams: { catagory: `${searchItem}`} });

  }
  
  CategoryProducts(category:any)
  
  { this.route.navigate(['/products'],{ queryParams: { catagory: `${category}`} });
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
