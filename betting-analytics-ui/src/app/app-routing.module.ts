import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancialAnalyticsComponent } from './financial-analytics/financial-analytics.component';
import { SegmentationComponent } from './segmentation/segmentation.component';
import { SegmentationInfoDialogComponent } from './shared/dialogs/segmentation-info-dialog/segmentation-info-dialog.component';

const routes: Routes = [
    {
      path: 'financial-analytics',
      component: FinancialAnalyticsComponent,
    },
    {
      path: 'segmentation',
      component: SegmentationComponent,
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FinancialAnalyticsComponent, SegmentationComponent, SegmentationInfoDialogComponent];
