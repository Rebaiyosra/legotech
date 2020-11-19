import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInResComponent } from './sign-in-res.component';

describe('SignInResComponent', () => {
  let component: SignInResComponent;
  let fixture: ComponentFixture<SignInResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
