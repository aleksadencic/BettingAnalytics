import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SegmentationComponent } from './segmentation/segmentation.component';

export const metaReducers: MetaReducer<{}>[] = []; 
export const reducers: ActionReducerMap<{}> = {
  appContext: fromAppContext.reducer
};

@NgModule({
  declarations: [
    AppComponent,
    SegmentationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SegmentationModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    NgrxRouterStoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
