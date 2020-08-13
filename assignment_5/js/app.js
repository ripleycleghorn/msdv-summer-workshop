// create data
var data = [
    {x: 0, y: 0}, 
    {x: 150, y: 150}, 
    {x: 300, y: 100}, 
    {x: 450, y: 20}, 
    {x: 600, y: 130}]

var yScale,
    yAxisValues,
    yAxisTicks,
    yGuide,
    xScale,
    xAxisValues,
    xAxisTicks,
    xGuide,
    lineFunc,
    myChart;


// 2. Use the margin convention practice 
var margin = {top: 0, right: 20, bottom: 30, left: 30}, 
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// create scales
yScale = d3.scaleLinear()
    .domain([0, 150])
    .range([0, height]);

yAxisValues = d3.scaleLinear()
    .domain([0, 150])
    .range([height,0]);

yAxisTicks = d3.axisLeft(yAxisValues)
  .ticks(5)

xScale = d3.scaleLinear()
    .domain([0, 600])
    .range([0, width]);

xAxisValues = d3.scaleLinear()
    .domain([0, 600])
    .range([0, width])

xAxisTicks = d3.axisBottom(xAxisValues)
    .ticks(5)


// create svg element:
myChart = d3.select("#viz")
    .append("svg")
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform',
      'translate(' + margin.left + ',' + margin.top + ')')

    

// prepare a helper function
lineFunc = d3.line()
  .x(function(d) { 
      return xScale(d.x) 
    })
  .y(function(d) {
      return height - yScale(d.y)
    })

// Add the path using this helper function
myChart.append('path')
  .attr('d', lineFunc(data))
  .attr('stroke', '#93A1A1')
  .attr('fill', 'none');

yGuide = d3.select('#viz svg').append('g')
    .attr('transform', 'translate(30,0)')
    .call(yAxisTicks)

xGuide = d3.select('#viz svg').append('g')
    .attr('transform', 'translate(30,'+ height + ')')
    .call(xAxisTicks)

