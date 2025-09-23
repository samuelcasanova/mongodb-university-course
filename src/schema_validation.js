const bookstore_reviews_default = {
  bsonType: 'object',
  required: ['_id', 'review_id', 'user_id', 'timestamp', 'review', 'rating'],
  additionalProperties: false,
  properties: {
    _id: { bsonType: 'objectId' },
    review_id: { bsonType: 'string' },
    user_id: { bsonType: 'string' },
    timestamp: { bsonType: 'date' },
    review: { bsonType: 'string' },
    rating: {
      bsonType: 'int',
      minimum: 0,
      maximum: 5
    },
    comments: {
      bsonType: 'array',
      maxItems: 3,
      items: {
        bsonType: 'object'
      }
    }
  }
}

const schema_validation = { $jsonSchema: bookstore_reviews_default }

db.runCommand({
  collMod: 'reviews',
  validator: schema_validation,
  validationLevel: 'strict',
  validationAction: 'error'
})

db.runCommand({ collMod: 'reviews_angel_april', validator: initial_schema, validationLevel: 'strict', validationAction: 'error' })
