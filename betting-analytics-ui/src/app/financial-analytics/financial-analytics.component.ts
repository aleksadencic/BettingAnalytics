import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FinancialAnalyticsService } from '../services/financial-analytics.service';
import * as variables from '../../environments/environment';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getFinancialsData, getProductsAnalyticsData } from './financial-analytics.selectors';
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
  selectedType;
  selectedProducts;
  selectedCountries;
  selectedPlatforms;
  financialsData = null;
  productsAnalyticsData = null;
  barChartOptionsYearFinChart: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        formatter: () => {
          return null;
        },
      },
    }
  };
  doughnutChartOptionsProductsAnalytics: any = {
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
    { backgroundColor: '#00565B' },
    { backgroundColor: '#0a8a91' },
    { backgroundColor: '#4f8b8e' },
    { backgroundColor: '#86b5b7' },
  ];

  // products analytics doughnut chart
  doughnutChartTypeProductAnalytics: ChartType = 'doughnut';
  doughnutChartLabelsProductAnalytics: Label[];
  doughnutChartDataProductAnalytics: MultiDataSet;


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
        this.financialsData = data;
        if (data){
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
    this.financialAnalyticsService.getProductsAnalytics(this.selectedCountries).subscribe(results => {
      this.store.dispatch({
        type: financialsActions.Actions.SET_PRODUCTS_ANALYTICS_DATA,
        data: results
      });
    });
    this.financialAnalyticsService.getFinancials(body).subscribe(results => {
      this.store.dispatch({
        type: financialsActions.Actions.SET_FINANCIALS_DATA,
        data: results
      });
    });
  }



}
