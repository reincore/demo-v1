import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit, OnDestroy {
  @ViewChild('searchInput') inputSearch: ElementRef;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  private subscription: Subscription = new Subscription();
  constructor() {}

  ngAfterViewInit(): void {
    this.detectInput();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private detectInput(): void {
    this.subscription.add(
      fromEvent(this.inputSearch.nativeElement, 'input')
        .pipe(
          debounceTime(250),
          map((e: any) => e.target.value),
          distinctUntilChanged()
        )
        .subscribe((searchValue: string) => {
          this.onSearch.emit(searchValue);
        })
    );
  }
}
