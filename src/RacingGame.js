import Computer from './computer/Computer.js';
import OutputView from './view/OutputView.js';

export default class RacingGame {
  #cars;

  #rounds;

  #distances;

  constructor(cars, rounds) {
    this.#cars = cars;
    this.#rounds = rounds;
    this.#distances = this.#initializeDistances(cars);
  }

  #initializeDistances(cars) {
    const distances = {};
    cars.forEach((car) => {
      distances[car] = 0;
    });
    return distances;
  }

  runRaceRounds() {
    OutputView.printResultAnnounce();
    for (let i = 0; i < this.#rounds; i += 1) {
      this.#calculateRoundResult();
    }
    const winners = this.#getRaceWinners();
    return OutputView.printWinners(winners);
  }

  #calculateRoundResult() {
    const scores = this.#getScores();
    const accumulatedResult = this.#isMovingForward(scores);
    OutputView.printDistances(accumulatedResult);
  }

  #getScores() {
    const scores = {};
    this.#cars.forEach((car) => {
      const score = Computer.getRandomeNumber();
      scores[car] = score;
    });
    return scores;
  }

  #isMovingForward(scores) {
    Object.keys(scores).forEach((car) => {
      const score = scores[car];
      if (score >= 4) {
        this.#distances[car] += 1;
      }
    });
    return this.#distances;
  }

  #getRaceWinners() {
    const max = this.#getHighestScore();
    const winners = Object.keys(this.#distances).filter((car) => {
      const distance = this.#distances[car];
      return max === distance;
    });
    return winners;
  }

  #getHighestScore() {
    let max = 0;
    Object.keys(this.#distances).forEach((car) => {
      const distance = this.#distances[car];
      if (distance > max) max = distance;
    });
  }
}
