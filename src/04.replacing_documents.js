/* eslint-disable no-undef */
console.log('Replacing review document with id r2:')
const result = db.reviews.replaceOne(
  { review_id: 'r2' },
  {
    review_id: 'r2',
    book_id: 'b2',
    user: {
      user_id: 'user2',
      name: 'User Two',
      age: 25
    },
    timestamp: new Date(),
    review: 'Not bad, but could be better.',
    rating: 3
  }
)
printjson(result)

console.log('Querying review with id r2 after replacement:')
const reviewR2 = db.reviews.findOne({ review_id: 'r2' })
printjson(reviewR2)
