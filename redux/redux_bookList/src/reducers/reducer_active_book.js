export default function (state = null, action) {
  switch (action.type) {
    case 'BOOKS_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
