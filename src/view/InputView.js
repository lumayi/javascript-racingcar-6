import { Console } from '@woowacourse/mission-utils';
import Validate from '../validation/Validate';

const InputView = {
  async getCarName() {
    const user = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const cars = user.split(',');
    Validate.checkAllNamingValidations(cars);
    return cars;
  },
  async getRacingRounds() {
    const rounds = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    Validate.isPositiveInteger(rounds);
    return Number(rounds);
  },
};
export default InputView;
