const { defaultNot } = require('./constants');

export const element = {
  $exists: function(values, comparison) {
     const value = comparison.$exists;
     // matches documents with the specified field
     // https://docs.mongodb.com/manual/reference/operator/query/exists/
     return ($not = defaultNot) => values.filter(v => $not(Object.prototype.hasOwnProperty.call(v, value)));
   },
   $type: function(values, comparison) {
     const value = comparison.$type;
     // selects docs if specified type i.e. int, string, etc.
     // https://docs.mongodb.com/manual/reference/operator/query/type/
     return ($not = defaultNot) => values.filter(v => $not(typeof(v) === value));
   }
}
