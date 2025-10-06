/* eslint-disable no-undef */
const author20 = db.authors.find({ _id: 20 })
console.log('Author with id 20:')
printjson(author20)

const booksByYears = db.books.find({ year: { $in: [1826, 1990] } })
console.log('Books from 1826 and 1990:')
printjson(booksByYears)

const booksAfter2000 = db.books.find({ year: { $gt: 2000 } })
console.log('Books published after 2000:')
printjson(booksAfter2000)

const reviewsFromYoungUsers = db.reviews.find({ 'user.age': { $lt: 28 } })
console.log('Reviews from users younger than 28:')
printjson(reviewsFromYoungUsers)

const authorsWithAlias = db.authors.find({ sanitizedName: 'jrrtolkien', aliases: { $elemMatch: { $eq: 'JRR Tolkien' } } })
console.log('Authors with alias "JRR Tolkien":')
printjson(authorsWithAlias)

const booksWithSeveralCriteria = db.books.find({
  $or: [
    { $and: [{ pages: { $gt: 400 } }, { pages: { $lt: 500 } }] },
    { year: { $gt: 2000 } }
  ]
})
console.log('Books with pages between 400 and 500, or year > 2000:')
printjson(booksWithSeveralCriteria)
