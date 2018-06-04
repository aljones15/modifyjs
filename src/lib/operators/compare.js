export const compare = {
  parse: function(values, comparison) {
    const keys = Object.keys(comparison); 
    const compareTypes = ['$eq', '$gt', '$gte', '$in', '$lt', '$lte', '$ne', '$nin'];
  },
  $gt: function(values, comparison) {
    return values.filter(v => v > comparison.$gt);
  },
  $gte: function(values, comparison) {
    return values.filter(v => v >= comparison.$gte);
  },
  $lt: function(values, comparison) {
    return values.filter(v => v < comparison.$lt);
  },
  $lte: function(values, comparison) {
    return values.filter(v => v <= comparison.$lte);
  }
  $in: function(values, comparison) {
    return values.filter(v => comparison.$in.includes(v));
  }
  $ne: function(values, comparison) {
    return values.filter(v => v != comparison.$ne);
  }
  $nin: function(values, comparison) {
    return values.filter(v => !comparison.$nin.includes(v));
  }
}

export default compare;
