export const element = {
  $exists: function(values, comparison) {
     const value = comparision.$exists;
     // matches documents with the specified field
     // https://docs.mongodb.com/manual/reference/operator/query/exists/
     return values.filter(v => v === value);
   },
   $type: function(values, comparison) {
     // selects docs if specified type i.e. int, string, etc.
     // https://docs.mongodb.com/manual/reference/operator/query/type/
   }
}
