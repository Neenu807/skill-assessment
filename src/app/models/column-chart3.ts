export const columnChartOptions3: any = {
    chart: {
      type: "column"
    },
    title: {
      text: "Skill Assessment"
    },
    subtitle: {
      text: "Choosing a Direction: Will you follow the mysterious trail back to the starting point or venture forward to the mystical endpoint?"
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
      name: 'Decision making process',
      data: [60]
  
  }, {
      name: 'Clarity in Reasoning',
      data: [90]
  
  }, {
      name: 'Time management skills',
      data: [90]
  
  },{
    name: 'Strategic thinking',
    data: [30]

}]
  
  };
  