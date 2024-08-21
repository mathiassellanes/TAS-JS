const books = Array.from({ length: 10 }, (_, i) => ({
  title: `Book ${i}`,
  author: `Name ${i}`
}))

function getTheTitles(books) {
  return books.map(book => book.title)
}

console.log(getTheTitles(books))
