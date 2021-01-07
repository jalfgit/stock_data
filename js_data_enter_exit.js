
// enter, update, exit pattern
//
var selection =  d3.select("").selectAll("").data(arr);

selection.enter().append("").merge(selection).style("height",d=>d);
selection.exit().remove

selection.attr("attr",value);
selection.attr("attr",d=>d);

d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {

  console.log(tvData);

  // log a list of names
  var names = tvData.map(data => data.name);
  console.log("names", names);

  // Cast each hours value in tvData as a number using the unary + operator
  tvData.forEach(function(data) {
    data.hours = +data.hours;
    console.log("Name:", data.name);
    console.log("Hours:", data.hours);
  });
}).catch(function(error) {
  console.log(error);
});


// alternative
d3.csv("file",function (err,tvData) {
	if (err) console.err;
	console.log(tvData);


	# another example
y = d3.scaleLinear()
    .domain(d3.extent(data, d => d.value))
    .range([height, 0])

y = d3.scaleLinear()
    .domain(d3.extent(data, d => d.value)).nice()
    .range([height - margin.bottom, margin.top])

grades = d3.scaleLinear().rangeRound([0, 3])

grades(63 / 100)
["D", "C", "B", "A"][grades(63 / 100)]


piecewiseScale = d3.scaleLinear()
  .domain([0, 100, 200, 300, 400])
  .range([220, 200, 100, 200, 150]) // add + Math.sin(now / 1000) * 50 to one of these for animation

crayons = d3.scaleLinear()
  .domain([-1, 0, 1])
  .range(["orange", "white", "green"])


date = d3.scaleLinear()
  .range([new Date("2009-01-01 00:00:00"), new Date("2009-12-31 23:59:59")])

days = d3.scaleLinear().range([new Date("2009-01-01"), new Date("2009-12-31")])

days(0.5)

paint = d3.scaleLinear()
  .range(["yellow", "red"])
  .unknown("#ccc");


  d3.json("/trip_animate/tripData.geojson", function(data) {

    console.log("It just works");  // This never logs to console.
  
    //...all the rest
  }
  

  d3.json(url, function(error, data) { 
    if (error) throw error;
    // Normal handling beyond this point.
  });
  

  d3.json("/trip_animate/tripData.geojson")
  .then(function(data) {
    // Code from your callback goes here...
  })
  .catch(function(error) {
    // Do some error handling.
  });


  const dataset = d3.csv("data.csv").then(function(data) {
      return data;
    });


    var bucket = {}

    var promises = [d3.csv('foo.csv'), d3.csv('bar.csv')]
    myDataPromises = Promise.all(promises)
    
    myDataPromises.then(function(data) {
      data[0].map(function(d) {
        ...
      });
      data[1].map(function(d) {
        ...
      });
      bucket.first = data[0]
      bucket.second = data[1]
            generateViz()
    })
    
    myDataPromises.catch(function() {
      console.log('Something has gone wrong.')
    })
    