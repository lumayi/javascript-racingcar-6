import Computer from './computer/Computer.js';
import OutputView from './view/OutputView.js';

export default class RacingGame {
  #cars;

  #rounds;

  // 이렇게 결과를 클래스 내에서 관리해도 괜찮을까?
  // initialize 함수를 사용해 클래스 생성자의 값을 초기화해줘도 괜찮을까?
  #result;

  constructor(cars, rounds) {
    this.#cars = cars;
    this.#rounds = rounds;
    this.#result = this.#initializeResult(cars);
  }

  #initializeResult(cars) {
    const result = {};
    cars.forEach((car) => {
      result[car] = 0;
    });
    return result;
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
        this.#result[car] += 1;
      }
    });
    return this.#result;
  }
}
