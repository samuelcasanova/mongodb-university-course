/* eslint-disable no-undef */
console.log('Using match and lookup:')
printjson(db.authors.aggregate([
  {
    $match: {
      _id: 20
    }
  }
]))

console.log('Using group:')
printjson(db.books.aggregate([
  {
    $group: {
      _id: '$author_id',
      totalBooks: { $count: {} },
      avgPages: { $avg: '$pages' }
    }
  }
]))

console.log('Using sort and limit:')
printjson(db.books.aggregate([
  {
    $sort: { pages: -1 } // -1 for descending order, 1 for ascending order
  },
  {
    $limit: 3
  }
]))

console.log('Using project:')
printjson(db.books.aggregate([
  {
    $project: {
      title: 1,
      year: 1,
      pages: 1,
      _id: 0,
      isClassic: { $cond: { if: { $lt: ['$year', 1950] }, then: true, else: false } } // Create a new field based on a condition
    }
  }
]))

console.log('Using set:')
printjson(db.books.aggregate([
  {
    $set: {
      book_id: '$_id',
      isClassic: { $cond: { if: { $lt: ['$year', 1950] }, then: true, else: false } }
    }
  }
]))

console.log('Using count:')
printjson(db.books.aggregate([
  {
    $count: 'totalBooks'
  }
]))

db.books.aggregate([
  {
    $match: { year: { $lt: 1900 } }
  },
  {
    $out: 'classic_books' // This will create a new collection named classic_books
  }
])
console.log('Using out and printing the new classic_books collection:')
printjson(db.classic_books.find().toArray())

console.log('Using lookup with set and project to do a inner join:')
printjson(db.books.aggregate([
  {
    $lookup: {
      from: 'authors', // The collection to join
      localField: 'author_id', // Field from the input documents
      foreignField: '_id', // Field from the documents of the "from" collection
      as: 'authorDetails' // Output array field
    }
  },
  {
    $set: {
      author: { $arrayElemAt: ['$authorDetails', 0] } // Unwind the array to get a single object
    }
  },
  {
    $project: {
      author_id: 0,
      authorDetails: 0 // Exclude the original array field
    }
  }
]))
