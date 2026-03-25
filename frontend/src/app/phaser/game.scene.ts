import Phaser from 'phaser';
import { GameStateService } from '../services/game-state.service';

export class GameScene extends Phaser.Scene {
  player!: Phaser.GameObjects.Rectangle;

  constructor(private gameState: GameStateService) {
    super('GameScene');
  }

  create() {
    // joueur
    this.player = this.add.rectangle(100, 100, 20, 20, 0x00ff00);

    // ennemi (collision)
    const enemy = this.add.rectangle(300, 200, 20, 20, 0xff0000);

    this.physics.add.existing(this.player);
    this.physics.add.existing(enemy);

    this.physics.add.overlap(
      this.player as any,
      enemy as any,
      () => {
        this.gameState.startBattle();
      }
    );
  }

  override update() {
    const cursors = this.input.keyboard?.createCursorKeys();

    if (!cursors) return;

    if (cursors.left.isDown) this.player.x -= 2;
    if (cursors.right.isDown) this.player.x += 2;
    if (cursors.up.isDown) this.player.y -= 2;
    if (cursors.down.isDown) this.player.y += 2;
  }
}
