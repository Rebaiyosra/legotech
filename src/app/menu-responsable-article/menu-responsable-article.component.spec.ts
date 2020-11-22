import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuResponsableArticleComponent } from './menu-responsable-article.component';

describe('MenuResponsableArticleComponent', () => {
  let component: MenuResponsableArticleComponent;
  let fixture: ComponentFixture<MenuResponsableArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuResponsableArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuResponsableArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
