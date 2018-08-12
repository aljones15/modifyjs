const { element } = require('./lib/operators/element');

  describe("$exists", () => {
    it("returns all objects in collection where propery exists", () => {
      const values = [{foo: true}, {}];
      const query = {$exists: 'foo'};
      const expected = [{foo: true}];
      const curriedCompare = element.$exists(values, query);
      const nextValues = curriedCompare();
      expect(nextValues).toEqual(expected);
    });

  });
  describe("$type", () => {
    it("returns all objects in collection that are strings", () => {
      const values = ['1', '10', 25, '4', 3, 2];
      const query = {$type: 'string'};
      const expected = ['1', '10', '4'];
      const curriedCompare = element.$type(values, query);
      const nextValues = curriedCompare();
      expect(nextValues).toEqual(expected);
    });

  });

