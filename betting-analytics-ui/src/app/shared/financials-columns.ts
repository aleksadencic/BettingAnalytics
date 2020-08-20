export const financialColumnsModel = [
  {
    headerName: 'Date',
    valueGetter: params => {
      return params.data._id.date;
    },
    cellStyle: {textAlign: 'left'}

  },
  {
    headerName: 'Amount',
    valueGetter: params => {
      return (Math.round(params.data.amount * 100) / 100).toFixed(2);
    },
    cellStyle: {textAlign: 'right'}
  },
  {
    headerName: 'Payment',
    valueGetter: params => {
      return (Math.round(params.data.payment * 100) / 100).toFixed(2);
    },
    cellStyle: {textAlign: 'right'}
  },
  {
    headerName: 'Profit',
    valueGetter: params => {
     return (Math.round((params.data.payment - params.data.amount) * 100) / 100).toFixed(2);
    },
    cellStyle: {textAlign: 'right'}
  },
  {
    headerName: 'Number of tickets',
    field: 'number_of_tickets',
    minWidth: 150,
    cellStyle: {textAlign: 'right'}
  },
  {
    headerName: 'PR',
    valueGetter: params => {
      return (Math.round((params.data.payment / params.data.amount) * 100) / 100).toFixed(2);
    },
    minWidth: 100,
    cellStyle: {textAlign: 'right'}
  },
];
