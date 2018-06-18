/**
 * @function defaultNot
 * @param {boolean}
 * @return {boolean}
 * @description defaultNot just returns a default boolean
 */
export function defaultNot (b) { return b; }

/*
 * @object compare
 * @description just a simple organizer for all compare methods
 */
export const compare = {
  types: ['$eq', '$gt', '$gte', '$in', '$lt', '$lte', '$ne', '$nin'],
  parse: function(values, comparison) {
    const keys = Object.keys(comparison);
    
  },
  $eq: function(values, comparison) {
    const value = comparison.$eq;
    // https://docs.mongodb.com/manual/reference/operator/query/eq/
    return ($not = defaultNot) => values.filter(v => $not(v === value));
  },
  $gt: function(values, comparison) {
    const value = comparison.$gt;
    // https://docs.mongodb.com/manual/reference/operator/query/gt/
    return ($not = defaultNot) => values.filter(v => $not(v > value));
  },
  $gte: function(values, comparison) {
    const value = comparison.$gte;
    // https://docs.mongodb.com/manual/reference/operator/query/gte/
    return ($not = defaultNot) => values.filter(v => $not(v >= value));
  },
  $lt: function(values, comparison) {
    const value = comparison.$lt;
    // https://docs.mongodb.com/manual/reference/operator/query/lt/
    return ($not = defaultNot) => values.filter(v => $not(v < value));
  },
  $lte: function(values, comparison) {
    const value = comparison.$lte;
    // https://docs.mongodb.com/manual/reference/operator/query/lte/
    return ($not = defaultNot) => values.filter(v => $not(v <= value));
  },
  $in: function(values, comparison) {
    const value = comparison.$in;
    // https://docs.mongodb.com/manual/reference/operator/query/in/
    return ($not = defaultNot) => values.filter(v => $not(value.includes(v)));
  },
  $ne: function(values, comparison) {
    const value = comparision.$ne;
    // https://docs.mongodb.com/manual/reference/operator/query/ne/
    return ($not = defaultNot) => values.filter(v => $not(v != value));
  },
  $nin: function(values, comparison) {
    const value = comparison.$nin;
    // https://docs.mongodb.com/manual/reference/operator/query/nin/
    return ($not = defaultNot) => values.filter(v => $not(!value.includes(v)));
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
