import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimantesComponent } from './imprimantes.component';

describe('ImprimantesComponent', () => {
  let component: ImprimantesComponent;
  let fixture: ComponentFixture<ImprimantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprimantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
