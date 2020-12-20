import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';

import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [AppComponent, CardsComponent, SearchComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
