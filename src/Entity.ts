import * as PIXI from 'pixi.js';

export default class Entity {

  public sprite: PIXI.Sprite = null;
  public position: PIXI.Point;
  public velocity: PIXI.PointLike;
  
  constructor(public id: string = "default") {
    this.velocity = new PIXI.Point(0,0);
  }

  setPosition(point: PIXI.Point) {
    this.position = point;
    this.sprite.position.set(point.x, point.y);
  }

  setSprite(sprite: PIXI.Sprite) {
    this.sprite = sprite;
  }

}