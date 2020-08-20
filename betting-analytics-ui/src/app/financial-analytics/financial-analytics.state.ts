export interface FinancialAnalyticsState {
    isDataLoaded: boolean;
    isDataLaunching: boolean;
    data: any;
    productsAnalyticsData: any;
};

export const initialFinancialAnalyticsState = {
    isDataLoaded: false,
    isDataLaunching: false,
    data: null,
    productsAnalyticsData: null,
};
