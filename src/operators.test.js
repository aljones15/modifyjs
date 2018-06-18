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
  describe("$gte", () => {
    it("returns all objects in collection greater than or equal to 4", () => {
      const values = [1, 10, 25, 4, 3, 2];
      const query = {$gte: 4};
      const expected = [10, 25, 4];
      const curriedCompare = compare.$gte(values, query);
      const nextValues = curriedCompare();
      expect(nextValues).toEqual(expected);
    });
  });

  describe("$eq", () => {
    it("returns all objects in collection equal to 4", () => {
      const values = [1, 10, 25, 4, 3, 2];
      const query = {$eq: 4};
      const expected = [4];
      const curriedCompare = compare.$eq(values, query);
      const nextValues = curriedCompare();
      expect(nextValues).toEqual(expected);
    });
  });

  describe("$lt", () => {
    it("returns all objects in collection less than 4", () => {
      const values = [1, 10, 25, 4, 3, 2];
      const query = {$lt: 4};
      const expected = [1,3,2];
      const curriedCompare = compare.$lt(values, query);
      const nextValues = curriedCompare();
      expect(nextValues).toEqual(expected);
    });
  });

  describe("$lte", () => {
    it("returns all objects in collection less than or equal to 4", () => {
      const values = [1, 10, 25, 4, 3, 2];
      const query = {$lte: 4};
      const expected = [1, 4, 3,2];
      const curriedCompare = compare.$lte(values, query);
      const nextValues = curriedCompare();
      expect(nextValues).toEqual(expected);
    });
  });

  describe("$in", () => {
    it("returns all objects in collection in [10, 4, 2, 100, 45]", () => {
      const values = [1, 10, 25, 4, 3, 2];
      const query = {$in: [10, 4, 2, 100, 45]};
      const expected = [10, 4, 2];
      const curriedCompare = compare.$in(values, query);
      const nextValues = curriedCompare();
      expect(nextValues).toEqual(expected);
    });
  });
