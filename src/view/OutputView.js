import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printDistances(result) {
    Object.keys(result).forEach((car) => {
      const distance = '-'.repeat(result[car]);
      Console.print(`${car} : ${distance}`);
    });
    Console.print('\n');
  },
  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  },
};

export default OutputView;
