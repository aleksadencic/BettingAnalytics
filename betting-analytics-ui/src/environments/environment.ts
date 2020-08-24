// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ,,prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};
export const base_url_mongo = 'http://localhost:3000';
export const base_url_oracle = 'http://localhost:3000';
export const types = [
  {value: 'year', viewValue: 'Annual'},
  {value: 'month', viewValue: 'Monthly'},
  {value: 'day', viewValue: 'Daily'},
];
export const products = [
  {value: 'sport_classic', viewValue: 'Sport Classic Betting'},
  {value: 'sport_live', viewValue: 'Sport Live Betting'},
  {value: 'casino', viewValue: 'Casino'},
  {value: 'loto', viewValue: 'Loto and lucky games'},
  {value: 'virtual', viewValue: 'Virtual games'},
  {value: 'mix', viewValue: 'Mix'},
];
export const parameters = [
  {value: 'amount', viewValue: 'Amount'},
  {value: 'payment', viewValue: 'Payment'},
  {value: 'players', viewValue: 'Number of players'},
];
export const genders = [
  {value: 'male', viewValue: 'Male'},
  {value: 'female', viewValue: 'Female'},
];
export const budgets = [
  {value: '10-', viewValue: '(0,10]'},
  {value: '(10-30)', viewValue: '(10,30]'},
  {value: '(30-100)', viewValue: '(30,100]'},
  {value: '100+', viewValue: '100+'},
];
export const platforms = [
  {value: 'land', viewValue: 'Land'},
  {value: 'web', viewValue: 'Web'},
];
export const frequencies = [
  {value: 'advanced', viewValue: 'Advanced'},
  {value: 'regular', viewValue: 'Regular'},
  {value: 'average', viewValue: 'Average'},
  {value: 'periodical', viewValue: 'Periodical'},
  {value: 'passive', viewValue: 'Passive'},
  {value: 'sleepy', viewValue: 'Sleepy'},
  {value: 'inactive', viewValue: 'Inactive'},
];
export const age_groups = [
  {value: '(18-25)', viewValue: '(18,25]'},
  {value: '(26-34)', viewValue: '(26,34]'},
  {value: '(35-40)', viewValue: '(35,40]'},
  {value: '(41-50)', viewValue: '(41,50]'},
  {value: '50+', viewValue: '50+'}
];
export const categories = [
  {value: 'sport_classic', viewValue: 'Sport Classic Betting'},
  {value: 'sport_live', viewValue: 'Sport Live Betting'},
  {value: 'casino', viewValue: 'Casino'},
  {value: 'loto', viewValue: 'Loto and lucky games'},
  {value: 'virtual', viewValue: 'Virtual games'},
  {value: 'mix', viewValue: 'Mix'},
];
export const presences = [
  {value: 'old', viewValue: 'Old'},
  {value: 'new', viewValue: 'New'},
];
export const countries = [
  {value: 'Serbia', viewValue: 'Serbia'},
  {value: 'Montenegro', viewValue: 'Montenegro'},
  {value: 'Bosnia', viewValue: 'Bosnia & Herzegovina'}
];

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone,error';  // Included with Angular CLI.
