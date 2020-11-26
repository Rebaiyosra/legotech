import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilUtilisateurComponent } from './acceuil-utilisateur.component';

describe('AcceuilUtilisateurComponent', () => {
  let component: AcceuilUtilisateurComponent;
  let fixture: ComponentFixture<AcceuilUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
