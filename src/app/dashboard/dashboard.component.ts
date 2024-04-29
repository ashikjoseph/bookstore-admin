import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allBooks: any = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllBooks()
  }
  getAllBooks() {
    this.api.getAllBooks().subscribe({
      next: (res: any) => {
        console.log(res)
        this.allBooks = res;
      },
      error: (res: any) => {
        console.log(res)
      }
    })
  }
  deleteBook(id:any){
    this.api.deleteBook(id).subscribe({
      next:(res:any)=>{
        alert("Book deleted successfully")
        this.getAllBooks();
      },
      error:(res:any)=>{
        console.log(res)
      }
    })
  }
}
