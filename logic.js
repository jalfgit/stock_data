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
      
      Plotly.newPlot('chart', trace);

}

function load_recommendation() {

    var table = d3.select("#tablerec");
    ratings.forEach((rating) => {
      var row = table.append("tr");
      
      //  start another loop for columns in array
      Object.values(rating).forEach((v) =>

      {
        let td = row.append("td");
        // row.append("td").text(v)  
        td.text(v);

      }
      )
    });
    
}


init();