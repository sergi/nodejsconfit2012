var architect = require("architect");
var config = [
    {
        packagePath: "./plugins/cook"
    },
    {
        packagePath: "./plugins/do-cooking",
        numberOfGuests: 8
    },

    // plugins without options can use this shorthand
    "./plugins/eventbus",
    "./plugins/cooking-reactor"
];

// Create relative tree
var tree = architect.resolveConfig(config, __dirname);

// Start application!
architect.createApp(tree, function () {
    console.log("Application started");
});


