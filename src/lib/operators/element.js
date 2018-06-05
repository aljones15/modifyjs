export const element = {
  $exists: function() {
     // matches documents with the specified field
     // https://docs.mongodb.com/manual/reference/operator/query/exists/
   },
   $type: function() {
     // selects docs if specified type i.e. int, string, etc.
     // https://docs.mongodb.com/manual/reference/operator/query/type/
   }
}
