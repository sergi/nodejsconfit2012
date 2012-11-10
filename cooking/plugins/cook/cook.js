module.exports = function (options, imports, register) {
    var bus = imports.eventbus;

    var theCook = {
		cook: function(dish) {
            bus.emit("cooking", dish);
        },
		swear: function (insult) {
			console.log(insult + "!!");
		}
	};

	register(null, {
		"cook": theCook
	});
};

