export const columnChartOptions2: any = {
    chart: {
      type: "column"
    },
    title: {
      text: "Skill Assessment"
    },
    subtitle: {
      text: "How will you attempt to signal or communicate your situation to the group using the resources around you?"
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
      name: 'Logical thinking',
      data: [30]
  
  }, {
      name: 'Problem-solving skills',
      data: [30]
  
  }, {
      name: 'Risk management abilities',
      data: [30]
  
  }]
  
  };
  