import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import BASE_URL from 'src/EndPoints/Rest_ends'


@Injectable(
    {
        providedIn: "root"
    }
)

export class ProductsService {
  
    constructor(public httpservice: HttpClient) { }
    public getallProducts():Observable<any> {
       console.log("in get products")
        return this.httpservice.get(BASE_URL+"Allproducts")
    }
    public getCategoryProducts(category):Observable<any> {
        console.log("in fashion products")
        console.log(BASE_URL)
         return this.httpservice.get(BASE_URL+"products/category/"+category)
     }

}