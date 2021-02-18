import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Custom modules
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GifsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
