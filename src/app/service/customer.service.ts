import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
apiurl='https://dummyjson.com/users';
  constructor(private http:HttpClient) {
   }

   LoadCustomer(): Observable<any> {
     return this.http.get(this.apiurl);
   }
   SaveCustomer(customedata:any){
    return this.http.post(this.apiurl,customedata);
   }
   LoadCustomerbycode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  RemoveCustomer(id:any){
    return this.http.delete(this.apiurl+'/'+id);
  }
}
