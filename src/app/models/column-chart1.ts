export const columnChartOptions1: any = {
  chart: {
    type: "column"
  },
  title: {
    text: "Skill Assessment"
  },
  subtitle: {
    text: "Lost and Alone: What immediate actions will you take to ensure your safety?"
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
    name: 'Logical-thinking',
    data: [90]

}, {
    name: 'Problem-solving skills',
    data: [60]

}, {
    name: 'Risk management abilities',
    data: [30]

}, {
  name: 'Insight into Culture and Environment',
  data: [30]

}]

};
