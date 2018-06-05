export const compare = {
  types: ['$eq', '$gt', '$gte', '$in', '$lt', '$lte', '$ne', '$nin'],
  parse: function(values, comparison) {
    const keys = Object.keys(comparison);
    
  },
  $eq: function(values, comparison) {
    // https://docs.mongodb.com/manual/reference/operator/query/eq/
  },
  $gt: function(values, comparison) {
    // https://docs.mongodb.com/manual/reference/operator/query/gt/
    return values.filter(v => v > comparison.$gt);
  },
  $gte: function(values, comparison) {
    // https://docs.mongodb.com/manual/reference/operator/query/gte/
    return values.filter(v => v >= comparison.$gte);
  },
  $lt: function(values, comparison) {
    // https://docs.mongodb.com/manual/reference/operator/query/lt/
    return values.filter(v => v < comparison.$lt);
  },
  $lte: function(values, comparison) {
    // https://docs.mongodb.com/manual/reference/operator/query/lte/
    return values.filter(v => v <= comparison.$lte);
  }
  $in: function(values, comparison) {
    // https://docs.mongodb.com/manual/reference/operator/query/in/
    return values.filter(v => comparison.$in.includes(v));
  }
  $ne: function(values, comparison) {
    // https://docs.mongodb.com/manual/reference/operator/query/ne/
    return values.filter(v => v != comparison.$ne);
  }
  $nin: function(values, comparison) {
    // https://docs.mongodb.com/manual/reference/operator/query/nin/
    return values.filter(v => !comparison.$nin.includes(v));
  }
}

/**
 * @function default
 * @param {Array} list
 * @param {Object} comparison 
 * @return {Array} the result of the compare
 */
export default function(list, comparison) {
  return compare.parse(list, comparison);
}
