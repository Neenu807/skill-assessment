export const columnChartOptions7: any = {
    chart: {
      type: "column"
    },
    title: {
      text: "Skill Assessment"
    },
    subtitle: {
      text: "Reunion with the Group: You finally emerge from the forest and find the trekking group. What are your actions and emotions upon this joyful reunion?"
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
      name: 'Emotional balance',
      data: [30]
  
  }, {
      name: 'Communication skills',
      data: [60]
  
  }, {
      name: 'Positive thinking',
      data: [90]
  
  }, {
    name: 'Social intelligence',
    data: [90]

}]
  
  };
  