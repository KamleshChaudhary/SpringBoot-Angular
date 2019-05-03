import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Todo } from '../todo-list/todo-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number;
  todo:Todo;
  constructor(private TodoService:DataService,private route:ActivatedRoute) { }

  ngOnInit() {

    this.id=this.route.snapshot.params['id'];
    this.todo=new Todo(1,'',false,new Date());
    this.TodoService.retriveTodo('kamlesh',this.id).subscribe(
      data=> {
        return this.todo = data;
      }

    )
  }
  saveTodo(){
   
    this.TodoService.UpdateTodo('kamlesh',this.id,this.todo).subscribe(

      data=>{
        console.log(data);
      }
    )
  }

}
