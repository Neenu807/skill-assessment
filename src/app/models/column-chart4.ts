export const columnChartOptions4: any = {
    chart: {
      type: "column"
    },
    title: {
      text: "Skill Assessment"
    },
    subtitle: {
      text: "Nightfall Approaches: As darkness falls and the forest whispers, what actions will you take to find shelter or continue your journey?"
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
      name: 'Adaptability',
      data: [60]
  
  }, {
      name: 'Presence of mind',
      data: [90]
  
  }, {
      name: 'Courage in face of uncertainity',
      data: [30]
  
  }, {
    name: 'Self awareness',
    data: [90]

}]
  
  };
  