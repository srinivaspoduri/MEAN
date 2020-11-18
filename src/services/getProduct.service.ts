import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable(
    {
        providedIn: "root"
    }
)

export class ProductsService {
    constructor(public httpservice: HttpClient) { }
    public getallProducts():Observable<any> {
       console.log("in get products")
        return this.httpservice.get("http://localhost:8080/Allproducts")
    }
    public getCategoryProducts(category):Observable<any> {
        console.log("in fashion products")
         return this.httpservice.get("http://localhost:8080/products/category/"+category)
     }

}