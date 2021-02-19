import { Component } from '@angular/core';
// Services
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent {

  get results(): any[] {
    return this.gifs_service.results;
  }

  constructor(private gifs_service: GifsService) { }


}
