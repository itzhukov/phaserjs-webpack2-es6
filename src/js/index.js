import BootState from './states/Boot'
import GameState from './states/Game'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > 500 ? 500 : docElement.clientWidth
    const height = docElement.clientHeight > 300 ? 300 : docElement.clientHeight

    super(width, height, Phaser.AUTO, 'root', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Game', GameState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()
