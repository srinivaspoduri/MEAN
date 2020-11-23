import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from '../account/account.component';
import { CartComponent } from '../cart/cart.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { productsComponent } from '../Products.component';

const routes: Routes = [
   {path: 'contacts' , component: ContactUsComponent},
   {path: '' , component: productsComponent}
    ,{path:"Home",component:productsComponent},
    {path:"cart",component:CartComponent},
    {path:"account",component:AccountComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
