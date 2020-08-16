import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SegmentationService } from '../services/segmentation.service';
import * as variables from '../../environments/environment'
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
  genders;
  budgets;
  platforms;
  frequencies;
  age_groups;
  categories;
  presences;
  countries;
  selectedGenders;
  selectedBudgets;
  selectedPlatforms;
  selectedFrequencies;
  selectedAgeGroups;
  selectedCategories;
  selectedPresences;
  selectedCountries;

  constructor(private zone: NgZone,
              private segmentationService: SegmentationService) { 
    this.selected = new FormControl(0);
    this.genders = variables.genders;
    this.budgets = variables.budgets;
    this.platforms = variables.platforms;
    this.frequencies = variables.frequencies;
    this.age_groups = variables.age_groups;
    this.categories = variables.categories;
    this.presences = variables.presences;
    this.countries = variables.countries;
  }

  ngOnInit(): void {
  }

  launch(){
    console.log(
      this.selectedGenders,
      this.selectedBudgets,
      this.selectedPlatforms,
      this.selectedFrequencies,
      this.selectedAgeGroups,
      this.selectedCategories,
      this.selectedPresences,
      this.selectedCountries);
    this.segmentationService.getSegmentationData().subscribe(results => {
      console.log(results);
    });
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
