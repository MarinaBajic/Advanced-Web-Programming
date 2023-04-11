"use strict";
// Example module which imports some parts of code from other module
Object.defineProperty(exports, "__esModule", { value: true });
var export_js_1 = require("./export.js");
// Next line will import everything from file ./export.js
// import * as math from "./export.js";
console.log(export_js_1.pi);
var absPhi = (0, export_js_1.absolute)(export_js_1.phi);
