const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [ ] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [ 4 ] for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
});
