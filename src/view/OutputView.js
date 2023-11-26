import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printDistances(result) {
    Object.keys(result).forEach((car) => {
      const distance = '-' * result[car];
      Console.print(`${car} : ${distance}`);
    });
  },
  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  },
};

export default OutputView;
