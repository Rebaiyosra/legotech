import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcOccassionComponent } from './pc-occassion.component';

describe('PcOccassionComponent', () => {
  let component: PcOccassionComponent;
  let fixture: ComponentFixture<PcOccassionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcOccassionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcOccassionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
