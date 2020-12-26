var data = {
    dates:null,
    open:null
};

d3.json("stock.json").then(function(d) {
    console.log(d);
}
)