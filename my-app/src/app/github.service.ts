import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable,map } from 'rxjs';
import { GithubUser,GithubSearchResponse } from './types';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor( private http: HttpClient ) { }

  getUsers(searchText:string) : Observable<GithubUser[]>
  {
    const url = `https://api.github.com/search/users?q=${searchText}`;
    return this.http
      .get<GithubSearchResponse>(url)
      .pipe(map((res) => res.items ));
  }
}
