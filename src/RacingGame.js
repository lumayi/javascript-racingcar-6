import Computer from './computer/Computer.js';
import OutputView from './view/OutputView.js';

export default class RacingGame {
  #cars;

  #rounds;

  // 이렇게 결과를 클래스 내에서 관리해도 괜찮을까?
  // initialize 함수를 사용해 클래스 생성자의 값을 초기화해줘도 괜찮을까?
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
    for (let i = 0; i < this.#rounds; i += 1) {
      this.#calculateRoundResult();
    }
    const winners = this.#getRaceWinners();
    OutputView.printWinners(winners);
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
    let max = 0;
    let winners = [];
    Object.keys(this.#distances).forEach((car) => {
      const distance = this.#distances[car];
      if (distance > max) {
        max = distance;
        winners = [];
        winners.push(car);
      }
      if (distance === max && !winners.includes(car)) {
        winners.push(car);
      }
    });
    return winners;
  }
}
