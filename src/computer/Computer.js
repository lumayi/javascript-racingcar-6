import { Random } from '@woowacourse/mission-utils';

export default class Computer {
  static getRandomeNumber() {
    return Random.pickNumberInRange(0, 9);
  }
}
