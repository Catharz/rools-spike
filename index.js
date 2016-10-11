var RuleEngine = require('node-rules');

var rules = [
    {
        "condition": function(R) {
            R.when(this && (this.productType == "TShirtProduct"));
        },
        "consequence": function(R) {
            this.discount = 20.0;
            R.stop();
        }
    },
    {
        "condition": function(R) {
            R.when(this && (this.productType == "ThrowPillowProduct"));
        },
        "consequence": function(R) {
            this.discount = 15.0;
            R.stop();
        }
    }
];

var fact = {
    "productType": "TShirtProduct",
    "basePrice": 15.0
};

var R = new RuleEngine(rules);
R.execute(fact, function(result) {
    if (result.discount > 0.0) {
        console.log("Discount is ", result.discount, "% off");
    } else {
        console.log("No discount applies");
    }
    console.log(result);
});
