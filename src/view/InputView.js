import { Console } from '@woowacourse/mission-utils';
import Validate from '../validation/Validate';

const InputView = {
  async getCarName() {
    const user = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const cars = user.split(',');
    Validate.checkAllValidations(cars);
  },
};
export default InputView;
