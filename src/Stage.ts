import * as PIXI from 'pixi.js';
import Map from './Map';
import Player from './Player';

export default class Stage {

  public map: Map;
  public mapContainer: PIXI.Container;

  public player: Player;
  public playerContainer: PIXI.Container;

  constructor (public container: PIXI.Container, public width: number, public height: number) {

    this.mapContainer = new PIXI.Container();
    this.map = new Map(this.mapContainer);
    this.container.addChild(this.mapContainer);
    
    this.playerContainer = new PIXI.Container();
    this.playerContainer.position.set(width/2, height/2);
    this.container.addChild(this.playerContainer);
    console.log("constructor Stage: ", container.width);
  }

  addPlayer(player: Player) {
    this.player = player;
    this.playerContainer.x = this.playerContainer.x - player.sprite.width / 2;
    this.playerContainer.y = this.playerContainer.y - player.sprite.height / 2;
    // check if player exists, and remove it
    this.playerContainer.addChild(player.sprite);
    this.map.loadStartPosition(this.player.position);
  }

  gameLoop() {
    if(this.player) {
      this.mapContainer.x -= this.player.velocity.x;
      this.mapContainer.y -= this.player.velocity.y;
    }

    // if(this.map !== null) {
    //   this.map.gameLoop();
    // }
  }

  render() {

  }

}