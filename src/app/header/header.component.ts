import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searchText="";
  constructor(public route:Router) { }

  ngOnInit(): void {
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
