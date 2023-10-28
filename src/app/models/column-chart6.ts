export const columnChartOptions6: any = {
    chart: {
      type: "column"
    },
    title: {
      text: "Skill Assessment"
    },
    subtitle: {
      text: "Sunrise in the Forest: As the first rays of the sun pierce through the canopy, what will be your first action? Describe your feelings and observations"
    },
    xAxis: {
      title: { text: 'skills' },
      categories: [
        ''
      ]
    },
    yAxis: {
      title: { text: 'levels' }
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Positivity',
      data: [60]
  
  }, {
      name: 'Artistic appreciation',
      data: [90]
  
  }, {
      name: 'Visualization ',
      data: [90]
  
  }, {
    name: 'planning Skills',
    data: [60]

}]
  
  };
  