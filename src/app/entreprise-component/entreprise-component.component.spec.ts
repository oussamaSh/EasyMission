import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseComponentComponent } from './entreprise-component.component';

describe('EntrepriseComponentComponent', () => {
  let component: EntrepriseComponentComponent;
  let fixture: ComponentFixture<EntrepriseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
