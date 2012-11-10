module.exports = function (options, imports, register) {
    var bus = imports.eventbus;
    
    // react on events in other plugins
    bus.on("cooking", function (dish) {
        console.log("The", dish, "is ready!!");
    });
    
    // nothing to expose
    register();
};