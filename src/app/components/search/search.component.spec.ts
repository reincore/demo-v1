import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [SearchComponent],
      imports: [FormsModule],
      declarations: [SearchComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a search component', () => {
    expect(component).toBeTruthy();
  });

  it('should update the search text in the component', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('input');
    const event = new Event('input');

    input.value = 'Game 10';
    input.dispatchEvent(event);

    fixture.detectChanges();

    expect(component.searchInput).toEqual('Game 10');
  }));
});
