/* eslint-disable no-undef */
console.log('Books published after 1920, sorted by year descending, limited to 3:')
const cursor = db.books.find({ year: { $gt: 1920 } }, { title: 1, year: 1, _id: 0 }).sort({ year: -1 }).limit(3) // -1 for descending order, 1 for ascending order
printjson(cursor.toArray())

const count = db.books.countDocuments({ year: { $gt: 1920 } })
console.log('Number of books published after 1920:', count)
