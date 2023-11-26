import { RULES } from '../constants/constants';

export default class Validate {
  static checkAllNamingValidations(cars) {
    cars.forEach((car) => {
      Validate.isValidNameLength(car);
    });
    Validate.isRacable(cars);
    Validate.isDuplicated(cars);
  }

  static isValidNameLength(car) {
    if (car.length < RULES.minNameLength || car.length > RULES.maxNameLength) {
      throw new Error('[ERROR] 이름은 1자 이상, 5자 이하여야 합니다.');
    }
  }

  static isRacable(cars) {
    if (cars.length < 2) {
      throw new Error('[ERROR] 자동차는 2대 이상이어야 합니다.');
    }
  }

  static isDuplicated(cars) {
    cars.forEach((car, index) => {
      if (cars.indexOf(car) !== index) {
        throw new Error('[ERROR] 이름은 중복될 수 없습니다.');
      }
    });
  }

  static isPositiveInteger(round) {
    const numberPattern = /^\d$/g;
    if (!numberPattern.test(round) || round < 1) {
      throw new Error('[ERROR] 0 이상의 정수를 입력해주세요.');
    }
  }
}
