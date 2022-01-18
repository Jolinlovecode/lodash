import shouldBuyCar from '../choose.js';
import assert from 'assert';


describe("#shouldBuyCar()", function() {
  it("should return true if it's pink", function() {
    const car = {
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return false if it's a hatchback", function() {
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);

  });

  it("should return false if it undefined", function() {
    const car = {
      car: ""
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);

  });

});
