import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  createForm;
  todoList;

  constructor(
    private formBuilder: FormBuilder,//inject services
    private snackbar: MatSnackBar,
    private todo: TodoService
  ){
    this.createForm = this.formBuilder.group({
      text: ''
    });//create formGroup
  }
  
  //retrieve todos from todo service
  async loadTodos(){
   this.todoList = await this.todo.getTodos();
  }

  alert(message){
    this.snackbar.open(message, 'Dismiss', {duration: 3000});
  }

  async toggle(event, id){
    const result = this.todo.toggleStatus(id, event.checked);
    if(!('error' in result))
      this.alert("Updated");
  }

  async deleteTodo(id){
    let result = await this.todo.deleteTodo(id);
    this.loadTodos();
    this.alert('Deleted!');
  }

  async ngOnInit(){
    this.loadTodos();
  }

  async onSubmit(todoData){
    let result: any =  await this.todo.createTodo(todoData);
    if('error' in result){
      console.log(result.error);
    }else{
      this.alert("Todo Created!");
    }
    this.loadTodos();
    this.createForm.reset();
  }
 
}

