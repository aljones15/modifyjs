  describe("$gt", () => {
    it("returns all objects in collection greater than 4", () => {
      const myObject = [{
        "_id": 1,
        "qty": 20
      }, {
        "_id": 2,
        "qty": 40
      }, {
        "_id": 3,
        "qty": 5
      }];
      
      const updatedObject = modify(myObject, {qty: {$gt: 20}});
      console.log(updatedObject);
    });
  });

