import { H, W } from 'functions/DOM/windowInfo';
import { GameObjects, Scene, Types } from 'phaser';
import { characterSize } from './Test';
import { keys } from './Test2';

// マップの画像とjsonファイルを読み込む
import mapTiles from '@/assets/maps/map001.png';
import mapJson from '@/json/map002.json';
import Atlas from '@/assets/characters/dynamic/atlas.png';
import AtlasJson from '@/json/atlas.json';
import player from '@/assets/characters/dynamic/player.png';

const width = W();
const height = H();

class Preload extends Scene {
  private backgroundColor: string = '#999';

  constructor() {
    super({ key: 'Preload' });
  }

  private fontStyle: Types.GameObjects.Text.TextStyle = {
    color: '#fff',
    fontSize: '70px',
  };

  init = () => {};

  preload = () => {
    this.load.image(keys.image, mapTiles);
    this.load.tilemapTiledJSON(keys.json, mapJson);
    this.load.atlas('atlas', Atlas, AtlasJson);

    this.load.image('mapTiles', mapTiles);
    this.load.spritesheet('player', player, {
      frameWidth: characterSize,
      frameHeight: characterSize,
    });
  };

  create = () => {
    this.cameras.main.setBackgroundColor(this.backgroundColor);
    const startMessage: GameObjects.Text = this.add.text(
      width / 2,
      height / 2,
      "'Enter' to start",
      this.fontStyle,
    );
    startMessage.setOrigin(0.5);

    // Enterキーでが押されたらTest2シーンへ遷移
    const enter = this.input.keyboard.addKey('Enter');
    // enter.on('down', () => {
    this.scene.start('Test2');
    // });
  };
}

export { Preload };
