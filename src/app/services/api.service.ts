import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url="http://localhost:3000";

  constructor(private http:HttpClient) { }

  // admin login api call
  adminLoginApi(data:any){
    return this.http.post(`${this.server_url}/admin/login`,data)
  }

  // add book api call
  addBookApi(data:any){
    return this.http.post(`${this.server_url}/addbook`,data)
  }

  // getAllBooks()
  getAllBooks(){
    return this.http.get(`${this.server_url}/listbooks`)
  }

  // delete book
  deleteBook(id:any){
    return this.http.delete(`${this.server_url}/deletebook/${id}`)
  }
}
