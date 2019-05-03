import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { ErrorComponent } from './error/error.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterGaurdService } from './services/router-gaurd.service';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'test/:name', component: TestComponent, canActivate:[RouterGaurdService]  },
  { path:'todos', component: TodoListComponent,canActivate:[RouterGaurdService] },
   {path:'todos/:id',component:TodoComponent,canActivate:[RouterGaurdService]},
   {path:'logout',component:LogoutComponent,canActivate:[RouterGaurdService]},
  { path:'**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
