import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Interfaces
import { Gif, SearchGifsResponse } from '../interfaces/search.interface';
// Environments
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _api_key: string = environment.api_key;
  private _giphy_url: string = 'https://api.giphy.com/v1/gifs/search';
  private _search_list: string[] = [];
  private _results: Gif[] = [];

  get search_list(): string[] {
    return [...this._search_list];
  }

  get results(): Gif[] {
    return [...this._results];
  }

  constructor( private http: HttpClient ) {
    this._search_list = JSON.parse(localStorage.getItem('history')!) || [];
    this._results = JSON.parse(localStorage.getItem('last_results')!) || [];
  }

  add_term(query: string) {
    if(query.trim().length === 0) return; // No empty terms
    query = query.trim().toLowerCase(); // No duplicates
    if(!this._search_list.includes(query)) { // No duplicates
      this._search_list.unshift(query);
      this._search_list = this._search_list.splice(0, 10); // Only 10 terms

      localStorage.setItem('history', JSON.stringify(this._search_list));
    }

    this.http.get<SearchGifsResponse>(`${this._giphy_url}?api_key=${this._api_key}&q=${query}&limit=10`)
      .subscribe( resp => {
        this._results = resp.data;
        localStorage.setItem('last_results', JSON.stringify(this._results));
      } );
  }
}
