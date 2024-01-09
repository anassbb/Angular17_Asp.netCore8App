import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListBooksComponent } from './page-list-books.component';

describe('PageListBooksComponent', () => {
  let component: PageListBooksComponent;
  let fixture: ComponentFixture<PageListBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageListBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageListBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
