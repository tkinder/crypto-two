import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesBitcoinComponent } from './articles-bitcoin.component';

describe('ArticlesBitcoinComponent', () => {
  let component: ArticlesBitcoinComponent;
  let fixture: ComponentFixture<ArticlesBitcoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesBitcoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
