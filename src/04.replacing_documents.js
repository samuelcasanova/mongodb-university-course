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
const updateSetResult = db.books.updateOne({ _id: '0000800883' }, { $set: { amount: 9.99 } })
printjson(updateSetResult)

console.log('Querying Frankenstein book after price update:')
const frankensteinBook = db.books.findOne({ _id: '0000800883' })
printjson(frankensteinBook)

console.log('Adding a new alias to "Michael Crichton":')
const updatePushResult = db.authors.updateOne(
  { _id: 22 },
  { $push: { aliases: { $each: ['Mike', 'Mikey'] } } }
)
printjson(updatePushResult)

console.log('Querying "Michael Crichton" author after adding new alias:')
const michaelCrichton = db.authors.findOne({ _id: 22 })
printjson(michaelCrichton)

console.log('Upserting a new book with id 0000800829:')
const upsertResult = db.books.updateOne({ _id: '0000800829' }, {
  $set: {
    author_id: 25,
    title: 'Beauty and the Beast',
    pages: 353,
    year: 1989,
    synopsis: 'A princess is kidnapped by a beast in a beautiful and animated castle.',
    amount: 10.99,
    last_updated: new Date()
  },
  $inc: { sightings: 1 }
}, { upsert: true })
printjson(upsertResult)

console.log('Querying book with id 0000800829 after upsert:')
const newBook = db.books.findOne({ _id: '0000800829' })
printjson(newBook)
