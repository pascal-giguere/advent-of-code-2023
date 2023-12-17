export type Coordinates = { x: number; y: number };

export function areCoordinatesAdjacent(coordinate1: Coordinates, coordinate2: Coordinates): boolean {
  return Math.abs(coordinate1.x - coordinate2.x) <= 1 && Math.abs(coordinate1.y - coordinate2.y) <= 1;
}
