import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SegmentationEffect } from '../segmentation/segmentation.effects';
import { segmentationReducer } from '../segmentation/segmentation.reducer';

@NgModule({
  declarations: [ ],
  exports: [
],
imports: [ 
    StoreModule.forFeature('segmentation', segmentationReducer),
    EffectsModule.forFeature([SegmentationEffect])    
  ],
})
export class SegmentationModule { }
