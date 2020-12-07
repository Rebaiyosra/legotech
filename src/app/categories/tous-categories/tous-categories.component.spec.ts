import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousCategoriesComponent } from './tous-categories.component';

describe('TousCategoriesComponent', () => {
  let component: TousCategoriesComponent;
  let fixture: ComponentFixture<TousCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TousCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TousCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
