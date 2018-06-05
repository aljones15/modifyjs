export const logicals {
  types: ['$not', '$or', '$and', '$nor'],
  $not: function() {
    // just inverts the condition
    // https://docs.mongodb.com/manual/reference/operator/query/not/
  },
  $or: function() {
    // not XOR
    // https://docs.mongodb.com/manual/reference/operator/query/or/
  },
  $and: function() {
    // returns elements that do match both conditions
    // https://docs.mongodb.com/manual/reference/operator/query/and/
  },
  $nor: function() {
    // returns elements that do not match both of the conditions
    // https://docs.mongodb.com/manual/reference/operator/query/nor/
  }
}
