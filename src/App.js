import RacingGame from './RacingGame.js';

class App {
  async play() {
    const game = new RacingGame(['pobi', 'woni', 'jun'], 3);
    game.runRaceRounds();
  }
}

const app = new App();
app.play();

export default App;
