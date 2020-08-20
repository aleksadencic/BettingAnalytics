import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FinancialAnalyticsService } from '../services/financial-analytics.service';
import * as variables from '../../environments/environment';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getFinancialsData, getProductsAnalyticsData, getCountriesAnalyticsData } from './financial-analytics.selectors';
import * as financialsActions from './financial-analytics.actions';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { Label, Color, MultiDataSet } from 'ng2-charts';
import { GridOptions } from 'ag-grid';
import { financialColumnsModel } from '../shared/financials-columns';

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
  selectedType = 'year';
  selectedProducts = ['sport_classic', 'sport_live', 'casino', 'loto', 'virtual', 'mix'];
  selectedCountries  = ['Serbia', 'Montenegro', 'Bosnia'];
  selectedPlatforms = ['land', 'web'];
  financialsData = null;
  productsAnalyticsData = null;
  countriesAnalyticsData = null;
  barChartOptionsYearFinChart: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { xAxes: [{}], yAxes: [{}] },
    title: {
      text: 'Financial analytics by time periods',
      display: true,
      fontSize: 17
    },
    plugins: {
      datalabels: {
        formatter: () => {
          return null;
        },
      },
    },
    legend: { position: 'bottom' }
  };
  doughnutChartOptionsProductsAnalytics: any = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      text: 'Financial analytics by products',
      display: true,
      fontSize: 17
    },
    plugins: {
      datalabels: {
        formatter: () => {
          return null;
        },
      },
    },
    legend: { position: 'bottom' }
  };
  doughnutChartOptionsCountriesAnalytics: any = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      text: 'Financial analytics by countries',
      display: true,
      fontSize: 17
    },
    plugins: {
      datalabels: {
        formatter: () => {
          return null;
        },
      },
    },
    legend: { position: 'bottom' }
  };

  // date financial bar chart - main chart
  barChartLabelsYearFinChart: Label[];
  barChartTypeYearFinChart: ChartType = 'bar';
  barChartLegendYearFinChart = true;
  barChartPluginsYearFinChart = [pluginDataLabels];
  barChartDataYearFinChart: ChartDataSets[];
  barChartColorsYearFinChart: Color[] = [
    {
      backgroundColor: '#00565b',
      borderColor: '#383736',
      borderWidth: 1,
    },
    {
      backgroundColor: '#ead7af',
      borderColor: '#383736',
      borderWidth: 1,
    },
    {
      backgroundColor: '#aa6baa',
      borderColor: '#383736',
      borderWidth: 1,
    },
    {
      backgroundColor: '#519296',
      borderColor: '#383736',
      borderWidth: 1,
    },
    {
      backgroundColor: '#b79661',
      borderColor: '#383736',
      borderWidth: 1,
    },
    {
      backgroundColor: '#add1d3',
      borderColor: '#383736',
      borderWidth: 1,
    },
    {
      backgroundColor: '#597677',
      borderColor: '#383736',
      borderWidth: 1,
    },
    // { backgroundColor: '#FFA1B5' },
  ];

  // products analytics doughnut chart
  doughnutChartTypeProductAnalytics: ChartType = 'doughnut';
  doughnutChartLabelsProductAnalytics: Label[];
  doughnutChartDataProductAnalytics: MultiDataSet;
  doughnutChartColorsProductAnalytics: Color[];

  // countries analytics doughnut chart
  doughnutChartTypeCountriesAnalytics: ChartType = 'doughnut';
  doughnutChartLabelsCountriesAnalytics: Label[];
  doughnutChartDataCountriesAnalytics: MultiDataSet;


  defaultColDefFinancials;

  // grid
  financialsGridOptions: GridOptions;

  constructor(private financialAnalyticsService: FinancialAnalyticsService,
              private store: Store<any>) {
    this.selected = new FormControl(0);
    this.types = variables.types;
    this.products = variables.products;
    this.countries = variables.countries;
    this.platforms = variables.platforms;
  }

  ngOnInit(): void {

    this.defaultColDefFinancials = {
      minWidth: 120,
      width: 120,
      filter: 'agTextColumnFilter',
      filterParams: { clearButton: true, debounceMs: 200},
      sortable: true,
      resizable: true,
    };

    this.financialsGridOptions = {
      columnDefs: financialColumnsModel,
      rowData : [],
      defaultColDef: this.defaultColDefFinancials,
      floatingFilter: true,
      rowGroupPanelShow: 'always',
      onGridReady: params => {
        this.financialsGridOptions = params;
        this.financialsGridOptions.api.sizeColumnsToFit();
      }
    };
    this.subs.add(
      this.store.select(getFinancialsData).subscribe(data => {
        if (data){
          this.financialsData = data;
          this.barChartLabelsYearFinChart = [];
          this.barChartDataYearFinChart = [
            { data: [], label: 'Amount' },
            { data: [], label: 'Payment' },
            { data: [], label: 'Tickets' },
          ];

          this.financialsData.filter(row => {
            this.barChartLabelsYearFinChart.push(row._id.date);
            this.barChartDataYearFinChart.filter(dataRow => {
              if(dataRow['label'] === 'Amount') dataRow['data'].push(row.amount);
              else if(dataRow['label'] === 'Payment') dataRow['data'].push(row.payment);
              else if(dataRow['label'] === 'Tickets') dataRow['data'].push(row.number_of_tickets);
            });
          });
          this.financialsGridOptions.api.setRowData(data);
          this.financialsGridOptions.api.sizeColumnsToFit();
        }
      })
    );
    this.subs.add(
      this.store.select(getProductsAnalyticsData).subscribe(data => {
        if (data){
          // backgroundColor: ['#00565b', '#ead7af', '#aa6baa', '#519296']
          this.productsAnalyticsData = data;
          const amounts = [];
          const payments = [];
          const tickets = [];
          const columnNames = [];
          data.filter(dataRow => {
            columnNames.push(`${dataRow._id.product} - ${dataRow._id.platform}`);
            amounts.push(dataRow.amount);
            payments.push(dataRow.payment);
            tickets.push(dataRow.number_of_tickets);
          });
          this.doughnutChartLabelsProductAnalytics = columnNames;
          this.doughnutChartDataProductAnalytics = [
            amounts,
            payments,
            tickets,
          ];
        }
      })
    );
    this.subs.add(
      this.store.select(getCountriesAnalyticsData).subscribe(data => {
        if (data){
          this.countriesAnalyticsData = data;
          const amounts = [];
          const payments = [];
          const tickets = [];
          const columnNames = [];
          data.filter(dataRow => {
            columnNames.push(dataRow._id.country);
            amounts.push(dataRow.amount);
            payments.push(dataRow.payment);
            tickets.push(dataRow.number_of_tickets);
          });
          this.doughnutChartLabelsCountriesAnalytics = columnNames;
          this.doughnutChartDataCountriesAnalytics = [
            amounts,
            payments,
            tickets,
          ];
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
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
    this.financialAnalyticsService.getCountriesAnalytics(this.selectedProducts).subscribe(results => {
      this.store.dispatch({
        type: financialsActions.Actions.SET_COUNTRIES_ANALYTICS_DATA,
        data: results
      });
    });
    this.financialAnalyticsService.getProductsAnalytics(this.selectedCountries).subscribe(results => {
      this.store.dispatch({
        type: financialsActions.Actions.SET_PRODUCTS_ANALYTICS_DATA,
        data: results
      });
    });
  }



}
