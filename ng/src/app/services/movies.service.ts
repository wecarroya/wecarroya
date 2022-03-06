import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = `${environment.ENV.api}:${environment.ENV.port}`
  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.url}/movies`);
  }

  getMovie(id:any) {
    return this.http.get(`${this.url}/movie_detail`, { params: { id: id }} );
  }
}
