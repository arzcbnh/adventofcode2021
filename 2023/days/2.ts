class Game {
    id: number;
    red: number;
    blue: number;
    green: number;
    power: number;

    constructor(set: string) {
        this.id = Number(set.match(/Game (\d+):/)![1]);
        this.red = findGreatestDieCount(set, "red");
        this.blue = findGreatestDieCount(set, "blue");
        this.green = findGreatestDieCount(set, "green");
        this.power = this.red * this.blue * this.green;
    }
}

const maxDie = {
    red: 12,
    green: 13,
    blue: 14,
} as const;

const hasEnoughDie = (game: Game) => game.red <= maxDie.red && game.blue <= maxDie.blue && game.green <= maxDie.green;
const maxAmount = (max: number, num: number) => (max > num ? max : num);

function findGreatestDieCount(set: string, color: string) {
    const regex = new RegExp(`(\\d+) ${color}`, "g");
    return set
        .matchAll(regex)
        .toArray()
        .map(match => Number(match[1]))
        .reduce(maxAmount);
}

export function solve(record: string) {
    const games = record.split("\n").map(set => new Game(set));
    const part1 = games.reduce((sum, game) => sum + game.id * Number(hasEnoughDie(game)), 0);
    const part2 = games.reduce((sum, game) => sum + game.power, 0);

    return { part1, part2 };
}
