import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SegmentationService } from '../services/segmentation.service';
import * as variables from '../../environments/environment'
import { GridOptions } from 'ag-grid';
import { segmentationColumnsModel } from '../shared/segmentation-columns';
import * as segmentationActions from '../segmentation/segmentation.actions';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getIsDataLaunching, getMembersData } from '../segmentation/segmentation.seletors';
import { getIsSidemenuOpen } from '../financial-analytics/financial-analytics.selectors';

@Component({
  selector: 'app-segmentation',
  templateUrl: './segmentation.component.html',
  styleUrls: ['./segmentation.component.scss']
})
export class SegmentationComponent implements OnInit, OnDestroy {
  filtersTitle = 'Members Segmentation';
  isDataLoaded = false;
  isDataLaunching = false;
  selected;
  subs = new Subscription();
  genders;
  budgets;
  platforms;
  frequencies;
  age_groups;
  categories;
  presences;
  countries;
  // selectedGenders = ['male', 'female'];
  // selectedBudgets = ['10-', '(10-30)', '(30-100)', '100+'];
  // selectedPlatforms = ['land', 'web'];
  // selectedFrequencies = ['advanced', 'regular', 'average', 'periodical', 'passive', 'sleepy', 'inactive'];
  // selectedAgeGroups = ['(18-25)', '(26-34)', '(35-40)', '(41-50)', '50+'];
  // selectedCategories = ['sport_classic', 'sport_live', 'casino', 'loto', 'virtual', 'mix'];
  // selectedPresences = ['old', 'new'];
  // selectedCountries = ['Serbia', 'Montenegro', 'Bosnia'];
  selectedGenders = ['male'];
  selectedBudgets = ['(10-30)', '(30-100)'];
  selectedPlatforms = ['land', 'web'];
  selectedFrequencies = ['advanced', 'regular', 'average', 'periodical', 'passive', 'sleepy', 'inactive'];
  selectedAgeGroups = ['(26-34)', '(35-40)'];
  selectedCategories = ['sport_classic', 'sport_live', 'casino', 'loto', 'virtual', 'mix'];
  selectedPresences = ['old', 'new'];
  selectedCountries = ['Serbia', 'Montenegro', 'Bosnia'];
  columnTypesSegmentation;
  segmentationData;
  averagePr = 0;

  defaultColDefSegmentation;
  // grid
  segmentationGridOptions: GridOptions;

  constructor(private zone: NgZone,
              private segmentationService: SegmentationService,
              private store: Store<any>) {
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

    this.subs.add(
      this.store.select(getMembersData).subscribe(data => {
        this.segmentationData = data;
        if (this.segmentationGridOptions && this.segmentationGridOptions.api) {
          this.segmentationGridOptions.api.setRowData(data);
          data.filter(row => {
            this.averagePr += row.performance_ratio;
          });
          this.averagePr = Number((Math.round((this.averagePr / data.length) * 100) / 100).toFixed(2));
          this.segmentationGridOptions.api.sizeColumnsToFit();
        }
      })
    );

    this.subs.add(
      this.store.select(getIsDataLaunching).subscribe(isDataLaunching => {
        this.isDataLaunching = isDataLaunching;
      })
    );

    this.subs.add(
      this.store.select(getIsSidemenuOpen).subscribe(isSidemenuOpen => {
        if (this.segmentationGridOptions && this.segmentationGridOptions.api){
          setTimeout(() => {
            this.segmentationGridOptions.api.sizeColumnsToFit();
          }, 250);
        }
      })
    );

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
      pagination: true,
      paginationAutoPageSize: true,
      onGridReady: params => {
        this.segmentationGridOptions = params;
        this.segmentationGridOptions.api.sizeColumnsToFit();
      },
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
    this.selected = new FormControl(1);
    this.store.dispatch({
      type: segmentationActions.Actions.SET_IS_DATA_LOADING,
      isDataLaunching: true
    });
    this.segmentationService.getSegmentationData(body);
  }

  reset(): void{
    // this.selectedGenders = ['male', 'female'];
    // this.selectedBudgets = ['10-', '(10-30)', '(30-100)', '100+'];
    // this.selectedPlatforms = ['land', 'web'];
    // this.selectedFrequencies = ['advanced', 'regular', 'average', 'periodical', 'passive', 'sleepy', 'inactive'];
    // this.selectedAgeGroups = ['(18-25)', '(26-34)', '(35-40)', '(41-50)', '50+'];
    // this.selectedCategories = ['sport_classic', 'sport_live', 'casino', 'loto', 'virtual', 'mix'];
    // this.selectedPresences = ['old', 'new'];
    // this.selectedCountries = ['Serbia', 'Montenegro', 'Bosnia'];
    this.selectedGenders = ['male'];
    this.selectedBudgets = ['(10-30)', '(30-100)'];
    this.selectedPlatforms = ['land', 'web'];
    this.selectedFrequencies = ['advanced', 'regular', 'average', 'periodical', 'passive', 'sleepy', 'inactive'];
    this.selectedAgeGroups = ['(26-34)', '(35-40)'];
    this.selectedCategories = ['sport_classic', 'sport_live', 'casino', 'loto', 'virtual', 'mix'];
    this.selectedPresences = ['old', 'new'];
    this.selectedCountries = ['Serbia', 'Montenegro', 'Bosnia'];
  }

  downloadCsv(): void {
    this.segmentationGridOptions.api.exportDataAsCsv({
      skipHeader: false,
      skipFooters: true,
      allColumns: true,
      onlySelected: false,
      // suppressQuotes: true,
      fileName: 'segmentation.csv',
      columnSeparator: ','
    });
  }

  getSegmentationInfo(): void {
    console.log('info');
  }

  ngOnDestroy(): void {
    this.store.dispatch({
      type: segmentationActions.Actions.SET_DEFAULT_DATA,
    });
  }

}
