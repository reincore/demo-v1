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
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.detectInput();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  private detectInput(): void {
    this.subscription.add(
      fromEvent(this.inputSearch.nativeElement, 'input') // ilk parametre HTML referansı, 2. parametre hangi event olduğu
        .pipe(
          debounceTime(250),
          map((e: any) => e.target.value),
          distinctUntilChanged() // gelen e.target.value öncekinden farklıysa işleme alınıyor
        )
        .subscribe((searchValue: string) => {
          this.onSearch.emit(searchValue);
        })
    );
  }
}
