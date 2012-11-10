var assert = require("assert");

var food = {
    entries: [
        "riso alla pitocca",
        "brofadei",
        "gnocarei e mariconde",
        "verzata"
    ],
    main_dishes: [
        "polenta pasticciata",
        "polenta e uccelli",
        "frittata di rane",
        "anguilla ai ferri",
        "oca ai ferri",
        "polenta e uccelli",
        "casonsei", 
        "polenta taragna", 
        "cuore di vitello alla bergamasca"
    ]
};

var insults = [
    "Merda!",
    "Cazzo!",
    "Porca vacca!",
    "Cavolo!"
];

function getRandom(arr) {
    var rnd = Math.floor(Math.random() * arr.length);
    return arr[rnd];
}

module.exports = function (options, imports, register) {
    assert.equal(typeof options.numberOfGuests, "number", 
        "Option 'numberOfGuests' is required");
    
    var theCook = imports.cook;
    
    function MakeDinner() {
        for (var i = 0; i < options.numberOfGuests; i++) {
            theCook.cook(getRandom(food.entries));
            
            if (Math.random() > 0.75)
                theCook.swear(getRandom(insults));
            
            theCook.cook(getRandom(food.main_dishes));
        }
    }
    
    MakeDinner();

	register();
};

