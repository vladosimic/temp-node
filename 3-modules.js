//CommonJS, every files is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { john, peter } = require("./4-names.js");
const sayHi = require("./5-utils.js");
const alt = require("./6-alternative-module-export");

require("./7-mind-granade");

sayHi("susan");
sayHi(john);
sayHi(peter);
