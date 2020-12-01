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
  }
  ClearCart()
  {
    this.selectedproservice.clear_cart();
  }

}
