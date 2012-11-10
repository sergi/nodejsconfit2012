var assert = require("assert");

// just reference the plugin (no architect required)
var doCooking = require("./cooking");

// when calling this we can mock it
var mockedCook = {
    cook: createStub(),
	swear: createStub()
};

var options = {
    numberOfGuests: 10
};
var imports = {
    "cook": mockedCook
};

doCooking(options, imports, function () {
	// assert we called the cook function 20 times (one for each dish)
	assert.equal(mockedCook.cook.callCount, options.numberOfGuests * 2);
});





// callcount stub
function createStub() {
    var fn = function () {
        fn.callCount++;
    };
    fn.callCount = 0;

    return fn;
}
