import { RULES } from '../constants/constants';

class Validate {
  static isValidNameLength(name) {
    if (
      name.length < RULES.minNameLength ||
      name.length > RULES.maxNameLength
    ) {
      throw new Error('[ERROR] 이름은 1자 이상, 5자 이하여야 합니다.');
    }
  }

  static isRacable(cars) {
    if (cars.length < 2) {
      throw new Error('[ERROR] 자동차는 2대 이상이어야 합니다.');
    }
  }
}
