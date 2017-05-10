export default class extends Phaser.State {
  init () {}

  preload () {
      this.load.image('mushroom', 'assets/images/mushroom2.png')
  }

  create () {
    this.mushroom = new Phaser.Sprite(
       this, this.world.centerX, this.world.centerY, 'mushroom'
    )

    this.mushroom.anchor.setTo(0.5)

    this.game.add.existing(this.mushroom)
  }

  update () {
    this.mushroom.angle += 4;
  }

  render () {
    this.game.debug.spriteInfo(this.mushroom, 32, 32)
  }
}
