import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFeatureComponent } from './book-feature.component';

describe('BookFeatureComponent', () => {
  let component: BookFeatureComponent;
  let fixture: ComponentFixture<BookFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
