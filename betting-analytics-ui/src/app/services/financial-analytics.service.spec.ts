import { TestBed } from '@angular/core/testing';

import { FinancialAnalyticsService } from './financial-analytics.service';

describe('FinancialAnalyticsService', () => {
  let service: FinancialAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
