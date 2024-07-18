export function reducer(state, action) {
  switch (action) {
    case 'AUMENTAR':
      return state + 1;
    case 'DIMINUIR':
      return state - 1;
    default:
      return new Error('Error, algo está errado!');
  }
}