import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseAffichComponent } from './entreprise-affich.component';

describe('EntrepriseAffichComponent', () => {
  let component: EntrepriseAffichComponent;
  let fixture: ComponentFixture<EntrepriseAffichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseAffichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseAffichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
