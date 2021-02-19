import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _api_key: string = 'mBAMoyhvRXQHedLcOFp41OS8T3qJOfWj';
  private _search_list: string[] = [];
  private _results: any[] = [];

  get search_list(): string[] {
    return [...this._search_list];
  }

  get results(): any[] {
    return [...this._results];
  }

  constructor( private http: HttpClient ) {}

  add_term(query: string) {
    if(query.trim().length === 0) return; // No empty terms
    query = query.trim().toLowerCase(); // No duplicates
    if(!this._search_list.includes(query)) { // No duplicates
      this._search_list.unshift(query);
      this._search_list = this._search_list.splice(0, 10); // Only 10 terms
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this._api_key}&q=${query}&limit=10`)
      .subscribe( (resp: any) => {
        console.log(resp.data);
        this._results = resp.data;
      } );
  }
}
