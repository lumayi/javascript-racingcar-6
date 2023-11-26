import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printDistances(result) {
    Object.keys(result).forEach((car) => {
      const distance = '-' * result[car];
      Console.print(`${car} : ${distance}`);
    });
  },
};

export default OutputView;
