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
//https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/
//https://therichpost.com/angular-9-material-carousel-slider/
@NgModule({
  declarations: [
    AppComponent
    ,productsComponent
  ],
  imports: [
    MatTableModule,MatButtonModule,
    MatTooltipModule,NgbModule,MatInputModule,ReactiveFormsModule,
    MatRippleModule,MatIconModule,FormsModule,MatDialogModule,MatGridListModule,
    MatFormFieldModule,BrowserModule,HttpClientModule,AppRoutingModule,
     BrowserAnimationsModule,NgHttpLoaderModule.forRoot()],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
