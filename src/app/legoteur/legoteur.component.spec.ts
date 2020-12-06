import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoteurComponent } from './legoteur.component';

describe('LegoteurComponent', () => {
  let component: LegoteurComponent;
  let fixture: ComponentFixture<LegoteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegoteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegoteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
