type Game = {
  number: number;
  sets: Set[];
};

type Set = {
  redCubes: number;
  greenCubes: number;
  blueCubes: number;
};

const MAXIMUM_SET: Set = {
  redCubes: 12,
  greenCubes: 13,
  blueCubes: 14,
};

export function calculatePossibleGamesSum(input: string): number {
  const possibleGames: Game[] = parseGames(input).filter(isGamePossible);
  return possibleGames.reduce((sum: number, game: Game) => sum + game.number, 0);
}

export function calculateMinimumSetPowersSum(input: string): number {
  const minimumSets: Set[] = parseGames(input).map(calculateMinimumSet);
  return minimumSets.reduce((sum: number, set: Set) => sum + calculateSetPower(set), 0);
}

function parseGames(input: string): Game[] {
  const lines: string[] = input.trim().split('\n');
  return lines.map(parseGame);
}

function parseGame(line: string): Game {
  const match = line.match(/^Game (\d+): (.*)$/);
  const number = parseInt(match[1]);
  const sets: Set[] = match[2].split('; ').map(parseSet);
  return { number, sets };
}

function parseSet(str: string): Set {
  const parseCubes = (color: 'red' | 'green' | 'blue'): number => {
    const match = str.match(new RegExp(`(\\d+) ${color}`));
    return match ? parseInt(match[1]) : 0;
  };

  return {
    redCubes: parseCubes('red'),
    greenCubes: parseCubes('green'),
    blueCubes: parseCubes('blue'),
  };
}

function isGamePossible(game: Game): boolean {
  return game.sets.every(isSetPossible);
}

function isSetPossible(set: Set): boolean {
  return (
    set.redCubes <= MAXIMUM_SET.redCubes &&
    set.greenCubes <= MAXIMUM_SET.greenCubes &&
    set.blueCubes <= MAXIMUM_SET.blueCubes
  );
}

function calculateMinimumSet(game: Game): Set {
  const minimumSet: Set = {
    redCubes: 0,
    greenCubes: 0,
    blueCubes: 0,
  };

  game.sets.forEach((set: Set) => {
    minimumSet.redCubes = Math.max(minimumSet.redCubes, set.redCubes);
    minimumSet.greenCubes = Math.max(minimumSet.greenCubes, set.greenCubes);
    minimumSet.blueCubes = Math.max(minimumSet.blueCubes, set.blueCubes);
  });

  return minimumSet;
}

function calculateSetPower(set: Set): number {
  return set.redCubes * set.greenCubes * set.blueCubes;
}
