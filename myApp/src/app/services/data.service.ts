import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo-list/todo-list.component';
import { longStackSupport } from 'q';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient,private todoservice:DataService) { }

  retriveAlltodos(username: string){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }
  DeleteTodos(username,id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)

  }
  retriveTodo(username,id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }
  UpdateTodo(username,id,todo){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`,todo)
  }
  

}
