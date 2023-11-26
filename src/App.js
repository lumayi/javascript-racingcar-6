import RacingGame from './RacingGame.js';
import InputView from './view/InputView.js';

class App {
  async play() {
    const cars = await InputView.getCarName();
    const rounds = await InputView.getRacingRounds();
    const game = new RacingGame(cars, rounds);
    game.runRaceRounds();
  }
}

const app = new App();
app.play();
export default App;
