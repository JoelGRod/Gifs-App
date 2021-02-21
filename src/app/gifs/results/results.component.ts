import { Component } from '@angular/core';
// Services
import { Gif } from '../interfaces/search.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent {

  get results(): Gif[] {
    return this.gifs_service.results;
  }

  constructor(private gifs_service: GifsService) { }


}
