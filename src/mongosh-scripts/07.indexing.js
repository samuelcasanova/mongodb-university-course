/* eslint-disable no-undef */
db.books.createIndex({ author_id: 1, year: 1 }) // Compound index on author_id and year
const booksIndexes = db.books.getIndexes()
console.log('Indexes on books collection:')
printjson(booksIndexes)

db.authors.createIndex({ name: 1 }, { unique: true }) // Unique index on author name
db.authors.createIndex({ aliases: 1 }) // Multikey index on aliases array
const authorsIndexes = db.authors.getIndexes()
console.log('Indexes on authors collection:')
printjson(authorsIndexes)

const queryPlan = db.books.explain().find({ author_id: 20, year: { $gt: 2000 } }) // Explain query using the compound index
console.log('Query plan for finding books by author_id 20 published after 2000:')
printjson(queryPlan)
