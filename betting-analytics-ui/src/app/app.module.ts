import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as fromAppContext from './store/reducers/app.reducer';
import { StoreModule, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgrxRouterStoreModule } from './store/reducers/router/ngrx-router.module';
import { MaterialModule } from './material/material.module';
import { SegmentationModule } from './segmentation/segmentation.module';
import { FinancialAnalyticsModule } from './financial-analytics/financial-analytics.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { AgGridModule } from 'ag-grid-angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { SegmentationInfoDialogComponent } from './shared/dialogs/segmentation-info-dialog/segmentation-info-dialog.component';

export const metaReducers: MetaReducer<{}>[] = [];
export const reducers: ActionReducerMap<{}> = {
  appContext: fromAppContext.reducer
};

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SegmentationInfoDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SegmentationModule,
    FinancialAnalyticsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    NgrxRouterStoreModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ChartsModule,
    AgGridModule,
    // NoopAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
