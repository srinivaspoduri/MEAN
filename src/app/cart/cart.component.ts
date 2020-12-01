import { Component, OnInit } from '@angular/core';
import { SelectedProductService } from 'src/services/SelectedProduct.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public selectedproservice: SelectedProductService) { }
items:any[];
  ngOnInit(): void {

  
    this.items= this.selectedproservice.get_items();
    console.log('in cart component'+this.items)
    for(var i = 0; i < this.items.length; i++) {
      var obj = this.items[i];
      if(Object.keys(obj).indexOf("Quantity") === -1)
      {
        this.items[i].Quantity =1;
      }
      else
      {
        this.items[i].Quantity = this.items[i].Quantity +1;
      }
  
       }
  }
  ClearCart()
  {
    this.selectedproservice.clear_cart();
  }

}
