import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
apiurl='http://localhost:5299/api/TodoItem';
  constructor(private http:HttpClient) {
   }
   LoadTodo(): Observable<any> {
     return this.http.get(this.apiurl);
   }
   SaveTodo(todoData:any){
    return this.http.post(this.apiurl,todoData);
   }
   LoadTodobycode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  RemoveTodo(id:any){
    return this.http.delete(this.apiurl+'/'+id);
  }
}
