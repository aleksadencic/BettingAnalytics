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

  launch(): void{
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

  }

  ngOnDestroy() {
    // this.zone.runOutsideAngular(() => {
    //   if (this.chart) {
    //     this.chart.dispose();
    //   }
    // });
  }

}
