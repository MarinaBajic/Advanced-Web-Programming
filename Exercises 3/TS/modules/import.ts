// Example module which imports some parts of code from other module

import { pi, phi, absolute } from "./export.js";

// Next line will import everything from file ./export.js
// import * as math from "./export.js";
 
console.log(pi);
const absPhi = absolute(phi);
