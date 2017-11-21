export function selectBook(book) {
  return {
    type: 'BOOKS_SELECTED',
    payload: book,
  };
}
