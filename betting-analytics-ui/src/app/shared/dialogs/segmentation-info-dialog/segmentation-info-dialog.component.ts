import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segmentation-info-dialog',
  templateUrl: './segmentation-info-dialog.component.html',
  styleUrls: ['./segmentation-info-dialog.component.scss']
})
export class SegmentationInfoDialogComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
