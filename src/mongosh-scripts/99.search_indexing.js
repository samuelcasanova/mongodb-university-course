/* eslint-disable no-undef */
// This script doesn't work locally as search indexes are only available in MongoDB Atlas
console.log('Creating a search index with the books text fields:')
db.books.createSearchIndex('booksIndex', {
  mappings: {
    fields: {
      title: {
        type: 'string'
      },
      synopsis: {
        type: 'string'
      }
    }
  }
})

console.log('Searching for books with "science fiction" in the synopsis:')
db.books.aggregate([
  {
    $search: {
      index: 'booksIndex',
      text: {
        query: 'science fiction',
        path: 'synopsis'
      }
    }
  }
])

console.log('Creating a dynamic search index with all the authors text fields:')
db.authors.createSearchIndex(
  { mappings: { dynamic: true } }
)

console.log('Searching for authors with "English" in any text field:')
printjson(db.authors.aggregate([
  {
    $search: {
      text: {
        query: 'English',
        path: {
          wildcard: '*'
        }
      }
    }
  }
]))

console.log('Searching for books released near 1990:')
printjson(db.books.aggregate([
  {
    $search: {
      index: 'plotReleasedIndex',
      near: {
        path: 'year',
        origin: 1990,
        pivot: 10
      }
    }
  }
]))
