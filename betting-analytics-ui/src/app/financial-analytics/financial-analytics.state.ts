export interface FinancialAnalyticsState {
    isDataLoaded: boolean;
    isDataLaunching: boolean;
    data: any;
    productsAnalyticsData: any;
    countriesAnalyticsData: any;
    sportBettingAnalyticsData: any;
    prAnalyticsData: any;
    isSidemenuOpen: any;
}

export const initialFinancialAnalyticsState = {
    isDataLoaded: false,
    isDataLaunching: false,
    data: null,
    productsAnalyticsData: null,
    countriesAnalyticsData: null,
    sportBettingAnalyticsData: null,
    prAnalyticsData: null,
    isSidemenuOpen: false,
};
