import * as PIXI from 'pixi.js';

export default class MapPiece {
  public offsetX: number;
  public offsetY: number;
  
  constructor(public globalX: number, public globalY: number, public sprite: PIXI.Sprite) {}

  setOffset(point: PIXI.Point) {
    this.offsetX = point.x;
    this.offsetY = point.y;
    this.sprite.position.set(this.offsetX + this.globalX*1000, this.offsetY + this.globalY*1000)
  }
}