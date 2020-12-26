function init() {
    var chart_area=d3.select("#chart");
    var trace = [
        {
          x: stock_hist.dates,
          y: stock_hist.close,
          type: 'scatter',
          name: 'Stock Data'
        }
      ];
      
      Plotly.plot('chart', trace);

}

function load_recommendation() {

    
}



init();