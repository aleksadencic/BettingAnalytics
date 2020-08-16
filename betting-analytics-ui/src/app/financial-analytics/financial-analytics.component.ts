import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FinancialAnalyticsService } from '../services/financial-analytics.service';
import * as variables from '../../environments/environment';
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
  selectedType;
  selectedProducts;
  selectedCountries;
  selectedPlatforms;
  selectedParameters;
  // chart: am4charts.XYChart;
  
  constructor(private zone: NgZone,
              private financialAnalyticsService: FinancialAnalyticsService) {                
    this.selected = new FormControl(0);
    this.types = variables.types;
    this.products = variables.products;
    this.countries = variables.countries;
    this.platforms = variables.platforms;
    this.parameters = variables.parameters;
  }
  
  ngOnInit(): void {}

  launch(){
    console.log(this.selectedType,
                this.selectedCountries, 
                this.selectedProducts,
                this.selectedParameters,
                this.selectedPlatforms);
    this.financialAnalyticsService.getFinancials().subscribe(results => {
      console.log(results);
    });
  }
  

}
