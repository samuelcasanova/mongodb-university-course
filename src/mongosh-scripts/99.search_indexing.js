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

console.log('Creating a faceted search index on the book categories:')
db.books.createSearchIndex(
  'categoriesFacetedIndex',
  {
    mappings: {
      dynamic: false,
      fields: {
        category: {
          type: 'stringFacet'
        },
        year: {
          type: 'number'
        }
      }
    }
  }
)

console.log('Performing a faceted search on the book categories:')
printjson(db.books.aggregate([
  {
    $search: {
      index: 'categoriesFacetedIndex',
      facet: {
        operator: {
          range: {
            path: 'year',
            gte: 1920,
            lte: 2020
          }
        }
      },
      facets: {
        categoriesFacet: {
          type: 'string',
          path: 'category'
        }
      }
    }
  }
]))
