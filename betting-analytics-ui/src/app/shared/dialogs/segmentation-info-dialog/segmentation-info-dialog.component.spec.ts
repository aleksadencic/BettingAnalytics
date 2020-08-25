import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentationInfoDialogComponent } from './segmentation-info-dialog.component';

describe('SegmentationInfoDialogComponent', () => {
  let component: SegmentationInfoDialogComponent;
  let fixture: ComponentFixture<SegmentationInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentationInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentationInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
