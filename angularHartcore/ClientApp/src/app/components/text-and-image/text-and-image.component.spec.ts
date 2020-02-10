import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAndImageComponent } from './text-and-image.component';

describe('TextAndImageComponent', () => {
  let component: TextAndImageComponent;
  let fixture: ComponentFixture<TextAndImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAndImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAndImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
