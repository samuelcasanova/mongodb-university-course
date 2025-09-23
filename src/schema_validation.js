/* eslint-disable no-undef */
const reviews = [
  {
    review_id: 'r1',
    book_id: 'b1',
    user_id: 'user1',
    timestamp: new Date(),
    review: 'Great book!',
    rating: 5
  },
  {
    review_id: 'r2',
    book_id: 'b2',
    user_id: 'user2',
    timestamp: new Date(),
    review: 'Not bad, but could be better.',
    rating: 3
  }
]

db.reviews.insertMany(reviews)
console.log(`Inserted ${reviews.length} reviews.`)

const reviewsSchema = {
  bsonType: 'object',
  required: ['review_id', 'book_id', 'user_id', 'timestamp', 'review', 'rating'],
  additionalProperties: false,
  properties: {
    review_id: { bsonType: 'string' },
    book_id: { bsonType: 'string' },
    user_id: { bsonType: 'string' },
    timestamp: { bsonType: 'date' },
    review: { bsonType: 'string' },
    rating: {
      bsonType: 'int',
      minimum: 0,
      maximum: 5
    }
  }
}
db.runCommand({
  collMod: 'reviews',
  validator: reviewsSchema,
  validationLevel: 'strict',
  validationAction: 'error'
})
console.log('Updated reviews collection with schema validation.')

console.log('Attempting to insert a review that violates the schema validation...')
db.reviews.insertOne({
  review_id: 0,
  user_id: 'testuser',
  timestamp: '2050-01-01',
  review: 'Another test review',
  rating: 9
})
