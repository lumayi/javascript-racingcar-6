import { RULES } from '../constants/constants';

class Validate {
  static isValidNameLength(name) {
    if (
      name.length < RULES.minNameLength ||
      name.length > RULES.maxNameLength
    ) {
      throw new Error('[ERROR] 이름은 1자 이상, 5자 이하여야합니다.');
    }
  },
}
