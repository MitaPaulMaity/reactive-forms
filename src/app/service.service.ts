import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }

  getproductForm(){
    return this._http.get<any>("http://localhost:3000/posts").pipe(
      map(
        (res => {
          return res;
        })))
  }

  postproductForm(data:any){
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(
      map(
        (res => {
          return res;
        })))
  }

  putproductForm(data:any,id:number){
    return this._http.put<any>("http://localhost:3000/posts/"+id, data).pipe(
      map(
        (res => {
          return res;
        })))
  }

  deleteproductForm(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(
      map(
        (res => {
          return res;
        })))
  }
}
