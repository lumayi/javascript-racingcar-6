import { RULES } from '../constants/constants';

export default class Validate {
  static checkAllValidations(cars) {
    cars.forEach((car) => {
      this.isValidNameLength(car);
    });
    this.isRacable(cars);
    this.isDuplicated(cars);
  }

  isValidNameLength(car) {
    if (car.length < RULES.minNameLength || car.length > RULES.maxNameLength) {
      throw new Error('[ERROR] 이름은 1자 이상, 5자 이하여야 합니다.');
    }
  }

  isRacable(cars) {
    if (cars.length < 2) {
      throw new Error('[ERROR] 자동차는 2대 이상이어야 합니다.');
    }
  }

  isDuplicated(cars) {
    cars.forEach((car, index) => {
      if (cars.indexOf(car) !== index) {
        throw new Error('[ERROR] 이름은 중복될 수 없습니다.');
      }
    });
  }
}
