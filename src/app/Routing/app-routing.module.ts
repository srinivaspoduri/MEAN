import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from '../account/account.component';
import { CartComponent } from '../cart/cart.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HomeComponent } from '../home/home.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { productsComponent } from '../Products.component';
import { SearchedProductsComponent } from '../searched-products/searched-products.component';
import { SubproductComponent } from '../subproduct/subproduct.component';

const routes: Routes = [
    {path: 'contacts' , component: ContactUsComponent}
    ,{path:"products",component:productsComponent},
    {path:"cart",component:CartComponent},
    {path:"account",component:AccountComponent},
    {path:"searchproducts",component:SearchedProductsComponent},
    {path: '' , component: HomeComponent},
    {path: '', redirectTo: 'Home', pathMatch: 'full'},
    {path: 'Home' , component: HomeComponent},
   {path: 'productdetails' , component: ProductDetailsComponent},
    {path: 'subproducts' , component: SubproductComponent},
     
    ];//{path: '' , component: HomeComponent}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
