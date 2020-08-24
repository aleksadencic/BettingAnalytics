export const segmentationColumnsModel = [
  // {
  //   headerName: 'Member Name',
  //   type: 'stringColumn',
  // },
  {
    headerName: 'Mail',
    type: 'stringColumn',
    field: 'mail',
    minWidth: 235
  },
  {
    headerName: 'Gender',
    type: 'stringColumn',
    valueGetter: params => {
      return String(params.data.gender).toUpperCase();
    },
  },
  {
    headerName: 'Country',
    type: 'stringColumn',
    field: 'country'
  },
  // {
  //   headerName: 'City',
  //   type: 'stringColumn',
  // },
  // {
  //   headerName: 'Date',
  //   type: 'stringColumn',
  // },
  {
    headerName: 'Budget',
    type: 'stringColumn',
    // field: 'budget'
    valueGetter: params => {
      let budget = params.data.budget;
      if (budget.includes('(')) {
        budget = budget.replace(')', ']').replace('-', ',');
      }
      return budget;
    },
  },
  {
    headerName: 'Platform',
    type: 'stringColumn',
    valueGetter: params => {
      return String(params.data.platform).toUpperCase();
    },
  },
  {
    headerName: 'Age Group',
    type: 'stringColumn',
    // field: 'age_group'
    valueGetter: params => {
      let age_group = params.data.age_group;
      if (age_group.includes('(')) {
        age_group = age_group.replace(')', ']').replace('-', ',');
      }
      return age_group;
    },
  },
  {
    headerName: 'Category',
    type: 'stringColumn',
    valueGetter: params => {
      const platform = String(params.data.platform);
      if (params.data.platform.includes('_')){
        const words = platform.split('_');
        let platformString = '';
        words.filter(word => {
          platformString += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
        });
        platformString = platformString.slice(0, -1);
        return platformString;
      } else {
        return platform.charAt(0).toUpperCase() + platform.slice(1);

      }
    },
  },
  {
    headerName: 'Presence',
    type: 'stringColumn',
    valueGetter: params => {
      return String(params.data.presence).toUpperCase();
    },
  },
  {
    headerName: 'PR',
    type: 'numberColumn',
    field: 'performance_ratio'
  },
];
