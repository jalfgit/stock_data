// example to load data into selector object

function init() {
    // wait(5000)
    alert("Function called")
    d3.json("/data/samples.json").then(function(d) {
        samples.names=d.names.map(v=>v);
        samples.samples=d.samples.map(v=>v);
        samples.metadata=d.metadata.map(v=>v);
        console.log(d);        
	d3.select("#selDataset").selectAll("option").data(samples.names).enter().append("option").text(v=>v).attr("value",v=>v);
	    // wait(5000);
    });    // d3.select("#selDataset").selectAll("option").data(samples.names).enter().append("option").text(v=>v).attr("value",v=>v);
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
 
 var samples={
    names:[],
    samples:[],
    metadata:[]
};// wait(5000);console.log("Priting outside of loop")
console.log(samples)
// var otu_ids = samples.samples.map(o => o.otu_ids);
// var sample_values = samples.samples.map(o => o.sample_values);
// var otu_labels = samples.samples.map(o => o.sample_values);// d3.select("#selDataset").selectAll("option").data(samples.names).enter().append("option");
// wait(5000);
init();

function optionChanged(testid) {
    alert("selected id: "+testid);
    console.log(samples.metadata.filter((o)=>o.id==testid));
    console.log(samples.samples.filter((o)=>o.id==testid));
    // buildChart();
    // buildsecondChart();
}//     2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.// * Use `sample_values` as the values for the bar chart.// * Use `otu_ids` as the labels for the bar chart.// * Use `otu_labels` as the hovertext for the chart.function buildChart(testid) {
    samples.metadata.filter((o)=>o.id==testid);
    samples.samples.filter((o)=>o.id==testid);
}
