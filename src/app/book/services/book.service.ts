import { Injectable } from '@angular/core';
import { BookInterface } from '../models/book-interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: BookInterface[] = [
    {
      id: 1,
      name: "Invisible Man",
      authors: ["Rizal", "William", "Shakespeare"],
      isbn: "1234456092"
    },
    {
      id: 2,
      name: "Harry Potter",
      authors: ["Agatha", "Faith", "Christine"],
      isbn: "74409202X"
    },
    {
      id: 3,
      name: "lord of the rings",
      authors: ["Chou", "Esmeralda", "John"],
      isbn: "098765151A"
    }
  ]

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.books;
  }

  postBook(data : any){
    return this.http.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getBook(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateBook(data : any, id: number){
    return this.http.put<any>("http://localhost:3000/posts/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteBook(id: number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
