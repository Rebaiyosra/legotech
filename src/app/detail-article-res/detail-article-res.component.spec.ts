import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArticleResComponent } from './detail-article-res.component';

describe('DetailArticleResComponent', () => {
  let component: DetailArticleResComponent;
  let fixture: ComponentFixture<DetailArticleResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailArticleResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailArticleResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
