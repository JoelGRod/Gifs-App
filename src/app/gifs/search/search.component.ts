import { Component, ElementRef, ViewChild } from '@angular/core';
// Services
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('term') term!: ElementRef<HTMLInputElement>;

  constructor(private gifs_service: GifsService) {}

  search(): void {
    const value = this.term.nativeElement.value;
    this.gifs_service.add_term(value);
    this.term.nativeElement.value = '';
  }


}
