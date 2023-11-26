import Validate from '../src/validation/Validate';

describe('예외 테스트', () => {
  const nameCases = ['', 'helloLuma'];
  test.each(nameCases)(
    '이름이 1자 미만, 5자 초과일 경우, 예외 발생',
    (name) => {
      expect(() => {
        Validate.isValidNameLength(name);
      }).toThrow('[ERROR] 이름은 1자 이상, 5자 이하여야 합니다.');
    },
  );

  test('자동차가 2대 미만일 경우, 예외 발생', () => {
    const cars = ['luma'];
    expect(() => {
      Validate.isRacable(cars);
    }).toThrow('[ERROR] 자동차는 2대 이상이어야 합니다.');
  });

  const dupCases = [
    [['luma', 'luma', 'pobi']],
    [['pobi', 'luma', 'pobi']],
    [['pobi', 'luma', 'luma']],
  ];
  test.each(dupCases)('자동차 이름이 중복일 경우, 예외 발생', (cars) => {
    expect(() => {
      Validate.isDuplicated(cars);
    }).toThrow('[ERROR] 이름은 중복될 수 없습니다.');
  });

  const numCases = ['o', '', '1oo', '-1', 0, '1.2'];
  test.each(numCases)('양의 정수가 아닐 경우, 예외 발생', (num) => {
    expect(() => {
      Validate.isPositiveInteger(num);
    }).toThrow('[ERROR] 0 이상의 정수를 입력해주세요.');
  });
});
