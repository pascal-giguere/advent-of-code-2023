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
  const lines: string[] = input.trim().split('\n');
  const games: Game[] = lines.map(parseGame);
  const possibleGames: Game[] = games.filter(isGamePossible);
  return possibleGames.reduce((sum: number, game: Game) => sum + game.number, 0);
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
