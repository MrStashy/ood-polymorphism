const AssertionList = require("../src/AssertionList.js");
const Equal = require("../src/Equal.js");
const Include = require("../src/Include.js");
const DeepEqual = require("../src/DeepEqual.js");

describe("AssertionList", () => {
  describe("#check()", () => {
    it("returns true when assertions are true", () => {
      const equalAssertion = new Equal(1, 1);
      const includeAssertion = new Include([1, 2, 3], 3);
      const deepEqualAssertion = new DeepEqual(
        {
          name: "John",
          age: 30,
          city: "NYC",
        },
        {
          name: "John",
          age: 30,
          city: "NYC",
        }
      );
      const assertionList = new AssertionList([
        equalAssertion,
        includeAssertion,
        deepEqualAssertion
      ]);

      expect(assertionList.checkAll()).toEqual(true);
    });

    it("returns false when at least 1 assertion is false", () => {
      const equalAssertion = new Equal(1, 2);
      const includeAssertion = new Include([1, 2, 3], 3);
      const deepEqualAssertion = new DeepEqual(
        {
          name: "John",
          age: 30,
          city: "NYC",
        },
        {
          name: "John",
          age: 31,
          city: "NYC",
        }
      );
      const assertionList = new AssertionList([
        equalAssertion,
        includeAssertion,
        deepEqualAssertion
      ]);

      expect(assertionList.checkAll()).toEqual(false);
    });
  });
});
