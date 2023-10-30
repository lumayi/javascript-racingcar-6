import { Console } from '@woowacourse/mission-utils';
import { Dice } from './Dice.js';

export class RacingGame {
  constructor() {
    this.dice = new Dice();
  }
  play() {
    const scores = this.getScore({ a: 0, b: 0, c: 0 });
    const result = this.validateScores(scores, { a: 0, b: 0, c: 0 });
    this.printScores(result);
  }

  getScore(cars) {
    const scores = {};
    Object.keys(cars).forEach((car) => (scores[car] = this.dice.roll()));
    return scores;
  }

  validateScores(scores, previousResult) {
    Object.keys(scores).forEach((car) => {
      const score = scores[car];
      if (score >= 4) previousResult[car] += 1;
    });
    return previousResult;
  }

  printScores(result) {
    Object.keys(result).forEach((car) => {
      const score = '-'.repeat(result[car]);
      Console.print(`${car} : ${score}`);
    });
  }
}
