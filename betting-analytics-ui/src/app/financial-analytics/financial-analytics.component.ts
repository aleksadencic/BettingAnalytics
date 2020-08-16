import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-financial-analytics',
  templateUrl: './financial-analytics.component.html',
  styleUrls: ['./financial-analytics.component.scss']
})
export class FinancialAnalyticsComponent implements OnInit {
  isDataLoaded = false;
  isDataLoading = false;
  selected;
  types;
  products;
  countries;
  platforms;
  parameters;
  // chart: am4charts.XYChart;
  
  constructor(private zone: NgZone) {
    this.selected = new FormControl(0);
    this.types = [
      {value: 'year', viewValue: 'Annual'},
      {value: 'month', viewValue: 'Monthly'},
      {value: 'day', viewValue: 'Daily'},
    ];
    this.products = [
      {value: 'sport_classic', viewValue: 'Sport Classic Betting'},
      {value: 'sport_live', viewValue: 'Sport Live Betting'},
      {value: 'casino', viewValue: 'Casino'},
      {value: 'loto', viewValue: 'Loto and lucky games'},
      {value: 'virtual', viewValue: 'Virtual games'},
      {value: 'mix', viewValue: 'Mix'},
    ];
    this.countries = [
      {value: 'serbia', viewValue: 'Serbia'},
      {value: 'montenegro', viewValue: 'Montenegro'},
      {value: 'bosnia', viewValue: 'Bosnia & Herzegovina'}
    ];
    this.platforms = [
      {value: 'land', viewValue: 'Land'},
      {value: 'web', viewValue: 'Web'},
    ];
    this.parameters = [
      {value: 'amount', viewValue: 'Amount'},
      {value: 'payment', viewValue: 'Payment'},
      {value: 'players', viewValue: 'Number of players'},
    ];
  }
  
  ngOnInit(): void {}
  

}
