import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Route, Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  todos:Todo[]
  message:String
  constructor(private todoservice:DataService,private router:Router) { }

  ngOnInit() {
     this.AccessTo();
  }
  
    AccessTo(){
      this.todoservice.retriveAlltodos('kamlesh').subscribe(
        response =>{
          console.log(response)
          this.todos=response;
        }
      )
    }
  DeleteTodo(id){

    this.todoservice.DeleteTodos('kamlesh',id).subscribe(

      response=>{
        console.log(response);
        this.message=`Delete todo ${id}`;
        this.AccessTo();
      }
    )
  
  }
  UpdateTodo(id){
    console.log(`Update ${id}`);
    this.router.navigate(['todos',id])
  }
}
 