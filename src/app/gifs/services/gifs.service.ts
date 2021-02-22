import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Interfaces
import { Gif, SearchGifsResponse } from '../interfaces/search.interface';
// Environments
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _api_url: string = environment.api_url;
  private _api_key: string = environment.api_key;
  private _limit: string = '10';

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

    this.api_search(query);

  }
  
  api_search(query: string) {
    // Request params
    const params = new HttpParams()
                        .set('api_key', this._api_key)
                        .set('limit', this._limit)
                        .set('q', query);
  
    // Request
    this.http.get<SearchGifsResponse>(`${this._api_url}/search`, {params: params})
      .subscribe( resp => {
        this._results = resp.data;
        localStorage.setItem('last_results', JSON.stringify(this._results));
      });
  }
}
