import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { productsComponent } from 'src/Products.component';
import { ProductsService } from 'src/services/getProduct.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
//https://www.smashingmagazine.com/2018/11/a-complete-guide-to-routing-in-angular/
//https://therichpost.com/angular-9-material-carousel-slider/
@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,productsComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule, BrowserAnimationsModule,MatTableModule,MatButtonModule,
    MatTooltipModule,NgbModule,MatInputModule,MatIconModule,FormsModule,NgHttpLoaderModule.forRoot()],
  providers: [ProductsService],
  bootstrap: [productsComponent]
})
export class AppModule { }
