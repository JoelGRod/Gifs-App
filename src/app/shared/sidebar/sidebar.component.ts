import { Component } from '@angular/core';
// Services
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  get history(): string[] {
    return this.gifs_service.search_list;
  }

  constructor(private gifs_service: GifsService) { }

  public search( term: string ): void {
    this.gifs_service.add_term(term);
  }




}
