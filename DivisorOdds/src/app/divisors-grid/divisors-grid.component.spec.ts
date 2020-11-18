import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisorsGridComponent } from './divisors-grid.component';

describe('DivisorsGridComponent', () => {
  let component: DivisorsGridComponent;
  let fixture: ComponentFixture<DivisorsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisorsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisorsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
