const add = require("../../src/stringCalculator");

test(" 1,5 string return 6" , () => { expect( add("1,5") ).toBe(6); });
test(" 1\n2,3 string return 6" , () => { expect( add("1\n2,3") ).toBe(6); });
test("//;\n1;2 should return 3", () => { expect( add("//;\n1;2") ).toBe(3); });
test(" -1,-2,0,1,2 should return exception", () => { expect( add("-1,-2,0,1,2") ).toBe(3); });