const Include = require("../src/Include.js")

describe("AssertionList", () => {
  describe("#check()", () => {
    it("returns true when assertion is true", () => {
      const includeAssertion = new Include([1,2,3], 3)

      expect(includeAssertion.check()).toEqual(true)
    })

    it("returns false when assertion is false", () => {
      const includeAssertion = new Include([1,2,3], 4)

      expect(includeAssertion.check()).toEqual(false)
    })
  })
})
