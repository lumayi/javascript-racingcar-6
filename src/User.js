import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE, ERROR_MESSAGE } from './Messages.js';

export default class User {
  static MIN_CAR_NAME_LENGTH = 5;

  static async getRaceCars() {
    const user = await Console.readLineAsync(CONSOLE_MESSAGE.NAME_OF_CARS);
    const cars = user.split(',');
    cars.forEach((car) => {
      const carStr = car.toString();
      if (carStr.length > User.MIN_CAR_NAME_LENGTH)
        throw new Error(ERROR_MESSAGE.CHAR_LENGTH_LIMIT);
    });
    return cars;
  }

  static async getRaceRounds() {
    const user = await Console.readLineAsync(CONSOLE_MESSAGE.NUMBER_OF_ROUNDS);
    const rounds = Number(user);
    if (!Number.isInteger(rounds)) throw new Error(ERROR_MESSAGE.INTEGER_ONLY);
    if (rounds < 1) throw new Error(ERROR_MESSAGE.MORE_THAN_ONE_ROUND);
    return rounds;
  }
}