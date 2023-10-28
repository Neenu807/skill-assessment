export const columnChartOptions5: any = {
    chart: {
      type: "column"
    },
    title: {
      text: "Skill Assessment"
    },
    subtitle: {
      text: "A Crying Voice: Amidst the rustling leaves, you hear a faint crying voice that resembles a friend\'s. Do you follow it or stay put? What\'s your plan?"
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
      name: 'Empathy',
      data: [90]
  
  }, {
      name: 'Risk assessment',
      data: [90]
  
  }, {
      name: 'Visualization',
      data: [90]
  
  }, {
    name: 'Decision making',
    data: [90]

}]
  
  };
  