import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisorsComponent } from './divisors.component';

describe('DivisorsComponent', () => {
  let component: DivisorsComponent;
  let fixture: ComponentFixture<DivisorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
