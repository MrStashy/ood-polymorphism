const DeepEqual = require("../src/DeepEqual");

describe("Deep equal", () => {
  it("returns false when values are not deeply equal", () => {
    const car = {
      make: "Ford",
      model: "Fiesta",
      year: 2019,
    };

    const user = {
      name: "John",
      age: 30,
      city: "NYC",
    };

    const deepEqualAssertion = new DeepEqual(car, user);
    expect(deepEqualAssertion.check()).toEqual(false);
  });

  it ("returns true when values are deeply equal", () => {
    const user = {
        name: "John",
        age: 30,
        city: "NYC",
      };

      const user2 = {
        name: "John",
        age: 30,
        city: "NYC",
      };

      const deepEqualAssertion = new DeepEqual(user, user2);
      expect(deepEqualAssertion.check()).toEqual(true)
  })

  it ("returns false when objects have minor differences", () => {
    const user = {
        name: "John",
        age: 31,
        city: "NYC",
      };

      const user2 = {
        name: "John",
        age: 30,
        city: "NYC",
      };

      const deepEqualAssertion = new DeepEqual(user, user2);
      expect(deepEqualAssertion.check()).toEqual(false)
  })

  it ("returns false when one object has identical properties but also extra properties", () => {
    const user = {
        name: "John",
        age: 31,
        city: "NYC",
      };

      const user2 = {
        name: "John",
        age: 31,
        city: "NYC",
        favouriteColor: 'red'
      };

      const deepEqualAssertion = new DeepEqual(user, user2);
      expect(deepEqualAssertion.check()).toEqual(false)
  })

});
