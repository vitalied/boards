import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Task } from './task';

@Injectable()
export class TaskService {
  private apiUrl = 'http://127.0.0.1:3000/api/boards';  // URL to web api
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _http: HttpClient) { }

  addTask(board_id: number, list_id: number, name: string) {
    const url = `${this.apiUrl}/${board_id}/lists/${list_id}/tasks`;
    return this._http.post<Task>(url, { task: { name: name } }, { headers: this.headers });
  }

  updateTaskPosition(board_id: number, old_list_id: number, new_list_id: number, task_id: number, position: number) {
    const url = `${this.apiUrl}/${board_id}/lists/${old_list_id}/tasks/${task_id}`;
    return this._http.patch<Task>(url, { task: { list_id: new_list_id, position: position } }, { headers: this.headers });
  }
}
