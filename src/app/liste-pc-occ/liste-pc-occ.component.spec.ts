import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePcOccComponent } from './liste-pc-occ.component';

describe('ListePcOccComponent', () => {
  let component: ListePcOccComponent;
  let fixture: ComponentFixture<ListePcOccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePcOccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePcOccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
