import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MovieService {
  public apiurl: string;
  public apikey: any;

  constructor(private http: HttpClient) { 
    this.apikey = '906817c6';
    this.apiurl = 'https://www.omdbapi.com/';
  }

  getmovielist(type?: string): Observable<any> {
    return this.http.get(this.apiurl+'?s='+type+'&r=json&apikey='+this.apikey,{});
  }

  getmoviedetail(slug?: string): Observable<any>{
    return this.http.get(this.apiurl+'?i='+slug+'&plot=full&r=json&apikey='+this.apikey,{});
  }

}