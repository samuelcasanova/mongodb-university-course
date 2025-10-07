/* eslint-disable no-undef */
console.log('Replacing review document with id r2 with a rating of 4:')
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
    rating: 4
  }
)
printjson(replaceResult)

console.log('Using findOneAndUpdate to increment rating of review with id r2 up to 5:')
const findAndReplaceResult = db.reviews.findOneAndUpdate(
  { review_id: 'r2' },
  {
    $inc: { rating: 1 }
  },
  { new: true }
)
printjson(findAndReplaceResult)

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

console.log('Updating all books published before 2000 to add a discount of 1 and increase amount by 1:')
const updateManyResult = db.books.updateMany(
  { year: { $lt: 2000 } },
  { $set: { discount: 1 }, $inc: { amount: 1 } }
)
printjson(updateManyResult)

console.log('Querying a sample book published before 2000 after bulk update:')
const updatedBooks = db.books.findOne({ year: { $lt: 2000 } })
printjson(updatedBooks)
