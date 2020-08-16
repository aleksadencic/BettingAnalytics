import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-segmentation',
  templateUrl: './segmentation.component.html',
  styleUrls: ['./segmentation.component.scss']
})
export class SegmentationComponent implements OnInit {
  isDataLoaded = false;
  isDataLoading = false;
  selected;
  // chart: am4charts.XYChart;
  genders = [];
  budgets = [];
  platforms = [];
  frequencies = [];
  age_groups = [];
  categories = [];
  presences = [];
  countries = [];
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(private zone: NgZone) { 
    this.selected = new FormControl(0);
    this.genders = [
      {value: 'm', viewValue: 'Male'},
      {value: 'f', viewValue: 'Female'},
    ];
    this.budgets = [
      {value: '0-5', viewValue: '0-5'},
      {value: '5-10', viewValue: '5-10'},
      {value: '10-30', viewValue: '10-30'},
      {value: '30-100', viewValue: '30-100'},
      {value: '100+', viewValue: '100+'},
    ];
    this.platforms = [
      {value: 'land', viewValue: 'Land'},
      {value: 'web', viewValue: 'Web'},
    ];;
    this.frequencies = [
      {value: 'advanced', viewValue: 'Advanced'},
      {value: 'regular', viewValue: 'Regular'},
      {value: 'average', viewValue: 'Average'},
      {value: 'periodical', viewValue: 'Periodical'},
      {value: 'passive', viewValue: 'Passive'},
      {value: 'sleepy', viewValue: 'Sleepy'},
      {value: 'inactive', viewValue: 'Inactive'},
    ];;
    this.age_groups = [
      {value: '(18-25]', viewValue: '18-25'},
      {value: '(26-34]', viewValue: '26-34'},
      {value: '(35-40]', viewValue: '35-40'},
      {value: '(41-50]', viewValue: '41-50'},
      {value: '50+', viewValue: '50+'}
    ];;
    this.categories = [
      {value: 'sport_classic', viewValue: 'Sport Classic Betting'},
      {value: 'sport_live', viewValue: 'Sport Live Betting'},
      {value: 'casino', viewValue: 'Casino'},
      {value: 'loto', viewValue: 'Loto and lucky games'},
      {value: 'virtual', viewValue: 'Virtual games'},
      {value: 'mix', viewValue: 'Mix'},
    ];;
    this.presences = [
      {value: 'old', viewValue: 'Old'},
      {value: 'new', viewValue: 'New'},
    ];;
    this.countries = [
      {value: 'serbia', viewValue: 'Serbia'},
      {value: 'montenegro', viewValue: 'Montenegro'},
      {value: 'bosnia', viewValue: 'Bosnia & Herzegovina'}
    ];;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.zone.runOutsideAngular(() => {
    //   let chart = am4core.create("financialChart", am4charts.XYChart);

    //   chart.paddingRight = 20;

    //   let data = [];
    //   let visits = 10;
    //   for (let i = 1; i < 366; i++) {
    //     visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    //     data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
    //   }

    //   chart.data = data;

    //   let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    //   dateAxis.renderer.grid.template.location = 0;

    //   let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    //   valueAxis.tooltip.disabled = true;
    //   valueAxis.renderer.minWidth = 35;

    //   let series = chart.series.push(new am4charts.LineSeries());
    //   series.dataFields.dateX = "date";
    //   series.dataFields.valueY = "value";

    //   series.tooltipText = "{valueY.value}";
    //   chart.cursor = new am4charts.XYCursor();

    //   let scrollbarX = new am4charts.XYChartScrollbar();
    //   scrollbarX.series.push(series);
    //   chart.scrollbarX = scrollbarX;

    //   this.chart = chart;
    // });
  }

  ngOnDestroy() {
    // this.zone.runOutsideAngular(() => {
    //   if (this.chart) {
    //     this.chart.dispose();
    //   }
    // });
  }

}
