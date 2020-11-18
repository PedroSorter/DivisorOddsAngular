import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisorsNumberComponent } from './divisors-number.component';

describe('DivisorNumberComponent', () => {
  let component: DivisorsNumberComponent;
  let fixture: ComponentFixture<DivisorsNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisorsNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisorsNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
