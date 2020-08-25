import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FinancialAnalyticsService } from '../services/financial-analytics.service';
import * as variables from '../../environments/environment';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
        getFinancialsData,
        getProductsAnalyticsData,
        getCountriesAnalyticsData,
        getIsDataLaunching,
        getSportBettingAnalyticsData,
        getPrAnalyticsData,
        getIsSidemenuOpen,
      } from './financial-analytics.selectors';
import * as financialsActions from './financial-analytics.actions';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { Label, Color, MultiDataSet } from 'ng2-charts';
import { GridOptions } from 'ag-grid';
import { financialColumnsModel } from '../shared/columns/financials-columns';

@Component({
  selector: 'app-financial-analytics',
  templateUrl: './financial-analytics.component.html',
  styleUrls: ['./financial-analytics.component.scss']
})
export class FinancialAnalyticsComponent implements OnInit, OnDestroy {
  isDataLoaded = false;
  isDataLaunching = false;
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
  sportBettingAnalyticsData = null;
  prAnalyticsData = null;
  columnTypesFinancials;
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
    legend: { position: 'bottom', display: false }
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
    legend: { position: 'bottom', display: false }
  };
  doughnutChartOptionsSportBettingAnalytics: any = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      text: 'Financial sport betting analytics by countries',
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
    legend: { position: 'bottom', display: false }
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
  doughnutChartColorsProductAnalytics: Color[] = [
    {
      backgroundColor: '#00565b',
      borderColor: '#ffffff',
      borderWidth: 5,
    },
    {
      backgroundColor: '#ead7af',
      borderColor: '#ffffff',
      borderWidth: 5,
    },
    {
      backgroundColor: '#aa6baa',
      borderColor: '#ffffff',
      borderWidth: 5,
    },
  ];

  // pr analytics line chart data
  lineChartDataPrAnalytics: ChartDataSets[];
  lineChartLabelsPrAnalytics: Label[];
  lineChartOptionsPrAnalytics = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { xAxes: [{}], yAxes: [{}] },
    title: {
      text: 'PR analytics by time periods',
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
  lineChartColorsPrAnalytics: Color[] = [
    {
      borderColor: '#00565B',
      backgroundColor: '#9cbbbc',
    },
  ];
  lineChartLegendPrAnalytics = true;
  lineChartPluginsPrAnalytics = [];
  lineChartTypePrAnalytics = 'line';

  // sport betting analytics doughnut chart
  doughnutChartTypeSportBettingAnalytics: ChartType = 'doughnut';
  doughnutChartLabelsSportBettingAnalytics: Label[];
  doughnutChartDataSportBettingAnalytics: MultiDataSet;
  doughnutChartColorsSportBettingAnalytics: Color[] = [
    {
      backgroundColor: '#00565b',
      borderColor: '#ffffff',
      borderWidth: 5,
    },
    {
      backgroundColor: '#ead7af',
      borderColor: '#ffffff',
      borderWidth: 5,
    },
    {
      backgroundColor: '#aa6baa',
      borderColor: '#ffffff',
      borderWidth: 5,
    },
  ];

  // countries analytics doughnut chart
  doughnutChartTypeCountriesAnalytics: ChartType = 'doughnut';
  doughnutChartLabelsCountriesAnalytics: Label[];
  doughnutChartDataCountriesAnalytics: MultiDataSet;
  doughnutChartColorsCountriesAnalytics: Color[] = [
      {
        backgroundColor: '#00565b',
        borderColor: '#ffffff',
        borderWidth: 5,
      },
      {
        backgroundColor: '#ead7af',
        borderColor: '#ffffff',
        borderWidth: 5,
      },
      {
        backgroundColor: '#aa6baa',
        borderColor: '#ffffff',
        borderWidth: 5,
      },
  ];



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
      filter: 'agNumberColumnFilter',
      filterParams: { clearButton: true, debounceMs: 200},
      sortable: true,
      resizable: true,
    };

    this.columnTypesFinancials = {
      numberColumn: { filter: 'agNumberColumnFilter', cellStyle: { 'text-align': 'right' } },
      stringColumn: { filter: 'agTextColumnFilter', cellStyle: { 'text-align': 'left' } },
    };
    this.financialsGridOptions = {
      columnDefs: financialColumnsModel,
      rowData : [],
      defaultColDef: this.defaultColDefFinancials,
      floatingFilter: true,
      rowGroupPanelShow: 'always',
      columnTypes: this.columnTypesFinancials,
      onGridReady: params => {
        this.financialsGridOptions = params;
        this.financialsGridOptions.api.sizeColumnsToFit();
      }
    };
    this.subs.add(
      this.store.select(getIsDataLaunching).subscribe(isDataLaunching => {
        this.isDataLaunching = isDataLaunching;
      })
    );
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
    this.subs.add(
      this.store.select(getSportBettingAnalyticsData).subscribe(data => {
        if (data){
          this.sportBettingAnalyticsData = data;
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
          this.doughnutChartLabelsSportBettingAnalytics = columnNames;
          this.doughnutChartDataSportBettingAnalytics = [
            amounts,
            payments,
            tickets,
          ];
        }
      })
    );
    this.subs.add(
      this.store.select(getPrAnalyticsData).subscribe(data => {
        if (data){
          this.prAnalyticsData = data;
          const columnNames = [];
          const prs = [];
          data.filter(dataRow => {
            columnNames.push(dataRow._id.date);
            prs.push((Math.round(dataRow.pr * 100) / 100).toFixed(2));
          });
          this.lineChartDataPrAnalytics = [
            { data: prs, label: 'PR' },
          ];
          this.lineChartLabelsPrAnalytics = columnNames;
        }
      })
    );
    this.subs.add(
      this.store.select(getIsSidemenuOpen).subscribe(isSidemenuOpen => {
        if (this.financialsGridOptions && this.financialsGridOptions.api){
          setTimeout(() => {
            this.financialsGridOptions.api.sizeColumnsToFit();
          }, 250);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.store.dispatch({
      type: financialsActions.Actions.SET_DEFAULT_STATE
    });
    this.subs.unsubscribe();
  }

  launch(): void{
    const body = {
      reportType: this.selectedType,
      country: this.selectedCountries,
      product: this.selectedProducts,
      platform: this.selectedPlatforms
    };
    this.store.dispatch({
      type: financialsActions.Actions.SET_IS_DATA_LAUNCHING,
      isDataLaunching: true
    });
    this.financialAnalyticsService.getFinancials(body).subscribe(results => {
      setTimeout(() => {
        this.store.dispatch({
          type: financialsActions.Actions.SET_FINANCIALS_DATA,
          data: results
        });
        this.store.dispatch({
          type: financialsActions.Actions.SET_IS_DATA_LAUNCHING,
          isDataLaunching: false
        });
      }, 2000);
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
    this.financialAnalyticsService.getSportBettingAnalytics().subscribe(results => {
      this.store.dispatch({
        type: financialsActions.Actions.SET_SPORT_BETTING_ANALYTICS_DATA,
        data: results
      });
    });
    this.financialAnalyticsService.getPrAnalytics(this.selectedType).subscribe(results => {
      this.store.dispatch({
        type: financialsActions.Actions.SET_PR_ANALYTICS_DATA,
        data: results
      });
    });
  }



}
