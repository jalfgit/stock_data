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

      var candle = [
        {
          x: stock_hist.dates,
          close: stock_hist.close,
          high: stock_hist.high,
          low: stock_hist.low,
          open: stock_hist.open,
          type: 'candlestick',
          name: 'Stock Data'
        }
      ];
      
      Plotly.newPlot('candle', candle);



      load_recommendation();

}

function load_recommendation() {

    var table = d3.select("#tablerec");

    ratings.firm.forEach((v,i) =>
      {
        console.log(i,v,ratings.grade[i]);
        var row = table.append("tr");
        let td = row.append("td");
        // row.append("td").text(v);
        td.text(v);

        td = row.append("td");
        // row.append("td").text(ratings.grade[i]);
        td.text(ratings.grade[i]);

      }
    );
};


function load_pie() {
  var trace = [
    {
      labels: ratings.grade,
      values: ratings.rating_id,
      type: 'pie'
    }
  ];
  
  Plotly.newPlot('pie', trace);

}

init();

