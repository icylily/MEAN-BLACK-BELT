import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAllTask() { return this._http.get('/api/tasks'); }
  getTaskById(ID: any) { return this._http.get('/api/tasks/' + ID) }
  createTask(Data: any) { return this._http.post('/api/tasks', Data) }
  updateTask(ID:any,Data:any) { return this._http.put('/api/tasks/' + ID ,Data) }
  deleteTask(ID: any) { return this._http.delete('/api/tasks/' + ID) }
}
