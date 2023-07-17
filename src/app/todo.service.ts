import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  httpOptions;
  server;

  //CRUD METHODS
  //We call toPromise() so that all methods return a promise
  createTodo({text}){
    return this.http.post(`${environment.server}/todos.json`, {text, done:false}, this.httpOptions).toPromise();
  }

  async getTodos(){
    let todos = [];
    
    let observable = this.http.get(`${environment.server}/todos.json`, this.httpOptions);
    
    let data = await observable.toPromise();//convert observable returned by get() into a promise so we can await the value

    //just some transformation of the data
    //because of how firebase stores a collection in a object
    for(let [key, value] of Object.entries(data)){
      value.id = key;
      todos.push(value);
    }

    return todos;
  }

  async deleteTodo(id){
    const observable = this.http.delete(`${environment.server}/todos/${id}.json`, this.httpOptions);
    let result = await observable.toPromise();
    return result;
  }

  toggleStatus(id, done){
    return this.http.put(`${environment.server}/todos/${id}/done.json`, done, this.httpOptions).toPromise();
  }

  constructor(
    private http: HttpClient,
  ) { 

    // Configuration parameter for http.get,post,put etc
    this.httpOptions = {
      headers : new HttpHeaders({//set headers using HttpHeaders()
                  'Content-Type': 'application/json'
                }
      )
    };
  }
}
