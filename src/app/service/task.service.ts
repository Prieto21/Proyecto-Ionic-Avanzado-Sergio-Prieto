import { Task } from './../interfaces/task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private api = 'https://jsonplaceholder.typicode.com';
  // private api = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) {

   }
  
  getAllTasks(){
    const path =`${this.api}/photos`;
    return this.http.get<Task[]>(path);
    }
  
  
}
