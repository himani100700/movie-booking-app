import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getmovielist() :Observable<any>{
    const url="https://ticketsbooking.herokuapp.com/api/movies";
     return this.http.get<any>(url);
       }
}
