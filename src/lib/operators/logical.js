export const logicals {
  types: ['$not', '$or', '$and', '$nor'],
  $not: function(b) {
    // just inverts the condition
    // https://docs.mongodb.com/manual/reference/operator/query/not/
    return !b;
  },
  $or: function(all, a, b) {
    // not XOR
    // https://docs.mongodb.com/manual/reference/operator/query/or/
    return all.filter(v => b.includes(v) || a.includes(v));
  },
  $and: function(all, a, b) {
    // returns elements that do match both conditions
    // https://docs.mongodb.com/manual/reference/operator/query/and/
    return all.filter(v => a.includes(v) && b.includes(v));
  },
  $nor: function(all, a, b) {
    // returns elements that do not match both of the conditions
    // https://docs.mongodb.com/manual/reference/operator/query/nor/
    return all.filter(v => !a.includes(v) && !b.includes(v));
  }
}
