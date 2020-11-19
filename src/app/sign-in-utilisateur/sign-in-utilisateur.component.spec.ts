import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInUtilisateurComponent } from './sign-in-utilisateur.component';

describe('SignInUtilisateurComponent', () => {
  let component: SignInUtilisateurComponent;
  let fixture: ComponentFixture<SignInUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
