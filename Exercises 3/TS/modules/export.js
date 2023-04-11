"use strict";
// Example module which exports different element of ts code
Object.defineProperty(exports, "__esModule", { value: true });
exports.absolute = exports.RandomNumberGenerator = exports.phi = exports.squareTwo = exports.pi = void 0;
// Exporting variables
exports.pi = 3.14;
exports.squareTwo = 1.41;
exports.phi = 1.61;
// Exporting classes
var RandomNumberGenerator = /** @class */ (function () {
    function RandomNumberGenerator() {
    }
    return RandomNumberGenerator;
}());
exports.RandomNumberGenerator = RandomNumberGenerator;
// Exporting functions
function absolute(num) {
    if (num < 0)
        return num * -1;
    return num;
}
exports.absolute = absolute;
