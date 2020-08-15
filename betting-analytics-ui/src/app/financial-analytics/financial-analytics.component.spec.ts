import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialAnalyticsComponent } from './financial-analytics.component';

describe('FinancialAnalyticsComponent', () => {
  let component: FinancialAnalyticsComponent;
  let fixture: ComponentFixture<FinancialAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
