import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ProductsService } from 'src/services/getProduct.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { productsComponent } from './Products.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import {MatDialogModule} from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { AppRoutingModule } from './Routing/app-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SearchedProductsComponent } from './searched-products/searched-products.component';
import { SubproductComponent } from './subproduct/subproduct.component';
import { SpacePipe } from './pipes/currencypipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SelectedProductService } from 'src/services/SelectedProduct.service';
//https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/
//https://therichpost.com/angular-9-material-carousel-slider/
@NgModule({
  declarations: [
    AppComponent
    ,productsComponent, HeaderComponent, FooterComponent, CartComponent, AccountComponent, HomeComponent,SearchedProductsComponent, SubproductComponent
    ,SpacePipe, ProductDetailsComponent ],
  imports: [
    MatTableModule,MatButtonModule,MatToolbarModule,
    MatTooltipModule,NgbModule,MatInputModule,ReactiveFormsModule,
    MatRippleModule,MatIconModule,FormsModule,MatDialogModule,MatGridListModule,MatCardModule,
    MatFormFieldModule,BrowserModule,HttpClientModule,AppRoutingModule,
     BrowserAnimationsModule,NgHttpLoaderModule.forRoot()],
  providers: [ProductsService,SelectedProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
