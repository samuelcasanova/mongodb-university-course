/* eslint-disable no-undef */
const initialCount = db.books.countDocuments()
console.log('Number of documents in books collection before deletions:', initialCount)

console.log('Deleting the book with id 0000800829:')
const deleteOneResult = db.books.deleteOne({ _id: '0000800829' })
printjson(deleteOneResult)
const afterDeleteOneCount = db.books.countDocuments()
console.log('Number of documents in books collection after deleting one document:', afterDeleteOneCount)

console.log('Deleting all books published before 1900:')
const deleteManyResult = db.books.deleteMany({ year: { $lt: 1900 } })
printjson(deleteManyResult)
const afterDeleteManyCount = db.books.countDocuments()
console.log('Number of documents in books collection after deleting many documents:', afterDeleteManyCount)
