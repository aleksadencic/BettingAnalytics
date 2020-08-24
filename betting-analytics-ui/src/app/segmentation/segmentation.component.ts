import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SegmentationService } from '../services/segmentation.service';
import * as variables from '../../environments/environment'
import { GridOptions } from 'ag-grid';
import { segmentationColumnsModel } from '../shared/segmentation-columns';

@Component({
  selector: 'app-segmentation',
  templateUrl: './segmentation.component.html',
  styleUrls: ['./segmentation.component.scss']
})
export class SegmentationComponent implements OnInit {
  filtersTitle = 'Members Segmentation';
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
  selectedGenders = ['male', 'female'];
  selectedBudgets = ['10-', '(10-30)', '(30-100)', '100+'];
  selectedPlatforms = ['land', 'web'];
  selectedFrequencies = ['advanced', 'regular', 'average', 'periodical', 'passive', 'sleepy', 'inactive'];
  selectedAgeGroups = ['(18-25)', '(26-34)', '(35-40)', '(41-50)', '50+'];
  selectedCategories = ['sport_classic', 'sport_live', 'casino', 'loto', 'virtual', 'mix'];
  selectedPresences = ['old', 'new'];
  selectedCountries = ['Serbia', 'Montenegro', 'Bosnia'];
  columnTypesSegmentation;

  defaultColDefSegmentation;
  // grid
  segmentationGridOptions: GridOptions;

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

    this.defaultColDefSegmentation = {
      minWidth: 120,
      width: 120,
      filter: 'agNumberColumnFilter',
      filterParams: { debounceMs: 200},
      sortable: true,
      resizable: true,
    };

    this.columnTypesSegmentation = {
      numberColumn: { filter: 'agNumberColumnFilter', cellStyle: { 'text-align': 'right' } },
      stringColumn: { filter: 'agTextColumnFilter', cellStyle: { 'text-align': 'left' } },
    };
    this.segmentationGridOptions = {
      columnDefs: segmentationColumnsModel,
      rowData : [],
      defaultColDef: this.defaultColDefSegmentation,
      rowGroupPanelShow: 'always',
      columnTypes: this.columnTypesSegmentation,
      floatingFilter: true,
      onGridReady: params => {
        this.segmentationGridOptions = params;
        this.segmentationGridOptions.api.sizeColumnsToFit();
      }
    };
  }

  launch(): void{
    const body = {
      genders: this.selectedGenders,
      budgets: this.selectedBudgets,
      platforms: this.selectedPlatforms,
      frequencies: this.selectedFrequencies,
      ageGroups: this.selectedAgeGroups,
      categories: this.selectedCategories,
      presences: this.selectedPresences,
      countries: this.selectedCountries
    };
    this.segmentationService.getSegmentationData(body).subscribe(results => {
      // console.log(results);
    });
  }

  reset(): void{
    this.selectedGenders = ['male', 'female'];
    this.selectedBudgets = ['10-', '(10-30)', '(30-100)', '100+'];
    this.selectedPlatforms = ['land', 'web'];
    this.selectedFrequencies = ['advanced', 'regular', 'average', 'periodical', 'passive', 'sleepy', 'inactive'];
    this.selectedAgeGroups = ['(18-25)', '(26-34)', '(35-40)', '(41-50)', '50+'];
    this.selectedCategories = ['sport_classic', 'sport_live', 'casino', 'loto', 'virtual', 'mix'];
    this.selectedPresences = ['old', 'new'];
    this.selectedCountries = ['Serbia', 'Montenegro', 'Bosnia'];
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
