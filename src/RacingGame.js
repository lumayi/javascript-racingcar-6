import Computer from './computer/Computer.js';

export default class RacingGame {
  #cars;

  #rounds;

  constructor(cars, rounds) {
    this.#cars = cars;
    this.#rounds = rounds;
  }

  #calculateRoundResult() {
    const scores = this.#getScores();
  }

  #getScores() {
    const scores = [];
    this.#cars.forEach((car) => {
      const score = Computer.getRandomeNumber();
      scores.push({ [car]: score });
    });
    return scores;
  }
}
