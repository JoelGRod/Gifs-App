import { Component, ElementRef, ViewChild } from '@angular/core';
// Services
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  @ViewChild('limit') limit!: ElementRef<HTMLInputElement>;

  get history(): string[] {
    return this.gifs_service.search_list;
  }

  get limit_options(): string[] {
    return this.gifs_service.limit_options;
  }

  constructor(private gifs_service: GifsService) { }

  public search( term: string ): void {
    this.gifs_service.add_term(term);
  }

  public set_gif_limit(): void {
    this.gifs_service.limit = this.limit.nativeElement.value;
  }




}
