const { compare } = require('./lib/operators/compare');
  describe("$gt", () => {
    it("returns all objects in collection greater than 4", () => {
      const values = [1, 10, 25, 4, 3, 2];
      const query = {$gt: 4};
      const expected = [10, 25];
      const curriedCompare = compare.$gt(values, query);
      const nextValues = curriedCompare();
      expect(nextValues).toEqual(expected);
    });
  });

