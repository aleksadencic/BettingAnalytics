import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FinancialAnalyticsEffect } from '../financial-analytics/financial-analytics.effects';
import { financialAnalyticsReducer } from '../financial-analytics/financial-analytics.reducer';

@NgModule({
  declarations: [ ],
  exports: [
],
imports: [ 
    StoreModule.forFeature('financial-analytics', financialAnalyticsReducer),
    EffectsModule.forFeature([FinancialAnalyticsEffect])    
  ],
})
export class FinancialAnalyticsModule { }
