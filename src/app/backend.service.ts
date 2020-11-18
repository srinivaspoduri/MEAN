import { Injectable } from '@angular/core';
import { InMemoryDbService, InMemoryWebApiModule, RequestInfo} from 'angular-in-memory-web-api'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService{

  constructor() { }
  createDb()
  {
let contacts=[

  {id: 1,name:'srinivas',email_id:'srinu9tech@gmail.com'},
  {id:2 ,name:'vamsi',email_id:"vamsi9tech@gmail.com"},
  {id:3,name:"gayatri",email_id:"gayatri9tech@gmail.com"},
  {id:4,name:'vyshnavi',email_id:"vyshnavi_9tech@gmail.com"}

];
return {contacts};

  };
  
}
