import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceComponentsComponent } from './freelance-components.component';

describe('FreelanceComponentsComponent', () => {
  let component: FreelanceComponentsComponent;
  let fixture: ComponentFixture<FreelanceComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelanceComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
