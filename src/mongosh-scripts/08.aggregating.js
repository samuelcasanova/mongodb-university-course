/* eslint-disable no-undef */
console.log('Using match and lookup:')
printjson(db.authors.aggregate([
  {
    $match: {
      _id: 20
    }
  },
  {
    $lookup: {
      from: 'books',
      localField: '_id',
      foreignField: 'author_id',
      as: 'books'
    }
  }
]))

console.log('Using group:')
printjson(db.books.aggregate([
  {
    $group: {
      _id: '$author_id',
      totalBooks: { $sum: 1 },
      avgPages: { $avg: '$pages' }
    }
  }
]))
