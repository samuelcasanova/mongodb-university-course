/* eslint-disable no-undef */
const author20 = db.authors.find({ _id: 20 })
console.log('Author with id 20:')
printjson(author20)

const booksByYears = db.books.find({ year: { $in: [1826, 1990] } })
console.log('Books from 1826 and 1990:')
printjson(booksByYears)
