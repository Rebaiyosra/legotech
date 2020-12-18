import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinCommandeComponent } from './fin-commande.component';

describe('FinCommandeComponent', () => {
  let component: FinCommandeComponent;
  let fixture: ComponentFixture<FinCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
