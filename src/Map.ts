import * as PIXI from 'pixi.js';
import MapPiece from './MapPiece';
import Player from './Player';

export default class Map {

  player: Player;

  constructor(public mapContainer: PIXI.Container) {
  }

  addMapPiece(mapPiece: MapPiece) {
    // mapPiece.setOffset(this.startingPoint);
    mapPiece.setOffset(new PIXI.Point(0,0)); // ????
    this.mapContainer.addChild(mapPiece.sprite);
  }

  // addPlayer(player: Player) {
  //   this.player = player;
  //   // player.setPosition(new PIXI.Point(
  //   //   500,
  //   //   100
  //   // ))
  //   console.log(111, this.mapContainer.width)
  //   player.setPosition(new PIXI.Point(
  //     this.width() / 2 - player.sprite.width / 2,
  //     this.height() / 2 - player.sprite.height / 2
  //   ))
  //   this.playerContainer.addChild(player.sprite);
  // }

  loadStartPosition(point: PIXI.Point) {
    let loader = new PIXI.loaders.Loader();
    loader
      .add("mapData", "data/map.json")
      .load((loader, resources) => {
        resources.mapData.data.forEach((v) => {
          loader
            .add(v)
            .on("progress", (loader, resource) => {
              if(resource.extension === "json") {
                this.addMapPiece(new MapPiece(
                  resource.data.meta.globalX, resource.data.meta.globalY,
                  new PIXI.Sprite(resource.textures["map.png"])
                ));
              }
            });
        });
      });
  }

  gameLoop() {

  }

  width() {
    return this.mapContainer.width;
  }

  height() {
    return this.mapContainer.height;
  }

}