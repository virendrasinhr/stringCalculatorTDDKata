const add = require("../../src/stringCalculator");

test(" Empty string return 0" , () => { expect( add("") ).toBe(0); });
test(" 1 string return 1" , () => { expect( add("1") ).toBe(1); });
test(" 1,5 string return 6" , () => { expect( add("1,5") ).toBe(6); });