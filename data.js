var ratings = {
    firm:[],
    grade:[]
};

var stock_hist ={
    dates:[],
    open:[],
    high:[],
    low:[],
    close:[],
    dow:[]
};

d3.json("stock.json").then(function(d) {
    // console.log(d);
    ratings.firm=d.firm;
    ratings.grade=d.grade;
}
)

d3.json("stock_h.json").then(function(d) {
    // console.log(d);
    stock_hist.dates=d.dates;
    stock_hist.open=d.open;
    stock_hist.high=d.high;
    stock_hist.close=d.close;
    stock_hist.low=d.low;
    stock_hist.dow=d.dow;

}
)

function rating_id(id) {
    switch (id) {
        case "Buy":
            return 3;
            break;
        case "Hold":
            return 2;
            break;
        case "Sell":
            return 1;
        default:
            return 0;
            break;
    }
}

ratings['rating_id']=ratings.grade.map(rating_id);