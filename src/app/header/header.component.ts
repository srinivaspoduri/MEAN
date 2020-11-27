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

}
