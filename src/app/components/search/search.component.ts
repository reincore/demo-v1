import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  searchInput: string;

  constructor() {}

  ngOnInit(): void {}

  onSearchInputChange() {
    this.onSearch.emit(this.searchInput);
  }
}
