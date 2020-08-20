import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FinancialAnalyticsService } from '../services/financial-analytics.service';
import * as variables from '../../environments/environment';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getFinancialsData } from './financial-analytics.selectors';
import * as financialsActions from './financial-analytics.actions';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label, Color } from 'ng2-charts';
// import * as am4core from '@amcharts/amcharts4/core';
// import * as am4charts from '@amcharts/amcharts4/charts';
// import am4themes_animated from '@amcharts/amcharts4/themes/animated';
// am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-financial-analytics',
  templateUrl: './financial-analytics.component.html',
  styleUrls: ['./financial-analytics.component.scss']
})
export class FinancialAnalyticsComponent implements OnInit, OnDestroy {
  isDataLoaded = false;
  isDataLoading = false;
  subs = new Subscription();
  selected;
  types;
  products;
  countries;
  platforms;
  selectedType;
  selectedProducts;
  selectedCountries;
  selectedPlatforms;
  financialsData = null;
  barChartOptionsYearFinChart: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
    animation: { }
  };
  // year financial bar chart
  barChartLabelsYearFinChart: Label[];
  barChartTypeYearFinChart: ChartType = 'bar';
  barChartLegendYearFinChart = true;
  barChartPluginsYearFinChart = [pluginDataLabels];
  barChartDataYearFinChart: ChartDataSets[];
  barChartColorsYearFinChart: Color[] = [
    { backgroundColor: '#00565B' },
    { backgroundColor: '#0a8a91' },
    { backgroundColor: '#4f8b8e' },
    { backgroundColor: '#86b5b7' },
  ];

  constructor(private financialAnalyticsService: FinancialAnalyticsService,
              private store: Store<any>) {
    this.selected = new FormControl(0);
    this.types = variables.types;
    this.products = variables.products;
    this.countries = variables.countries;
    this.platforms = variables.platforms;
  }

  ngOnInit(): void {
    this.subs.add(
      this.store.select(getFinancialsData).subscribe(data => {
        this.financialsData = data;
        if(data){
          this.barChartLabelsYearFinChart = [];
          this.barChartDataYearFinChart = [
            { data: [], label: 'Amount' },
            { data: [], label: 'Payment' },
            { data: [], label: 'Tickets' },
            { data: [], label: 'PR' }
          ];
          this.financialsData.filter(row => {
            this.barChartLabelsYearFinChart.push(row._id.date);
            this.barChartDataYearFinChart.filter(dataRow => {
              if(dataRow['label'] === 'Amount') dataRow['data'].push(row.amount);
              else if(dataRow['label'] === 'Payment') dataRow['data'].push(row.payment);
              else if(dataRow['label'] === 'Tickets') dataRow['data'].push(row.number_of_tickets);
              else if(dataRow['label'] === 'PR') dataRow['data'].push(row.payment/row.amount);
            });
          });
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngAfterViewInit(): void {

  }

  launch(): void{
    const body = {
      reportType: this.selectedType,
      country: this.selectedCountries,
      product: this.selectedProducts,
      platform: this.selectedPlatforms
    };
    this.financialAnalyticsService.getFinancials(body).subscribe(results => {
      this.store.dispatch({
        type: financialsActions.Actions.SET_FINANCIALS_DATA,
        data: results
      });

    });
  }



}
