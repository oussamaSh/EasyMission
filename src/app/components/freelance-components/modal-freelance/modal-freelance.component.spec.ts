import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFreelanceComponent } from './modal-freelance.component';

describe('ModalFreelanceComponent', () => {
  let component: ModalFreelanceComponent;
  let fixture: ComponentFixture<ModalFreelanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFreelanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFreelanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
