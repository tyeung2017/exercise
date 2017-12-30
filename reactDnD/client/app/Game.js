let knightPosition = [0, 0];
let observer = null;

const emitChange = () => observer(knightPosition);

export const observe = (f) => {
  if (observer) throw new Error('multiple observer');

  observer = f;
  emitChange();
};

export const moveKnight = (toX, toY) => {
  knightPosition = [toX, toY];
  emitChange();
};


export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
           (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}
