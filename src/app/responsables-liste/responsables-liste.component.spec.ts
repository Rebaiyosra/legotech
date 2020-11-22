import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsablesListeComponent } from './responsables-liste.component';

describe('ResponsablesListeComponent', () => {
  let component: ResponsablesListeComponent;
  let fixture: ComponentFixture<ResponsablesListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsablesListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsablesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
