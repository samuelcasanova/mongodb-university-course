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
