import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { productsComponent } from '../Products.component';

const routes: Routes = [{path: 'contacts' , component: ContactUsComponent},{path:"Home",component:productsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
