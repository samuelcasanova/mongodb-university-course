/* eslint-disable no-undef */
console.log('Replacing review document with id r2 with a rating of 5:')
const replaceResult = db.reviews.replaceOne(
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
    rating: 5
  }
)
printjson(replaceResult)

console.log('Querying review with id r2 after replacement:')
const reviewR2 = db.reviews.findOne({ review_id: 'r2' })
printjson(reviewR2)

console.log('Updating Frankenstein book price to 9.99:')
const updateResult = db.books.updateOne({ _id: '0000800883' }, { $set: { amount: 9.99 } })
printjson(updateResult)

console.log('Querying Frankenstein book after price update:')
const frankensteinBook = db.books.findOne({ _id: '0000800883' })
printjson(frankensteinBook)
