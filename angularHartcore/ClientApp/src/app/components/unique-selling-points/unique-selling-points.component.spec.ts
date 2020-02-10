import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueSellingPointsComponent } from './unique-selling-points.component';

describe('UniqueSellingPointsComponent', () => {
  let component: UniqueSellingPointsComponent;
  let fixture: ComponentFixture<UniqueSellingPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueSellingPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueSellingPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
