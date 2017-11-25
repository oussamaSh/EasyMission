import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceComponentComponent } from './freelance-component.component';

describe('FreelanceComponentComponent', () => {
  let component: FreelanceComponentComponent;
  let fixture: ComponentFixture<FreelanceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelanceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
