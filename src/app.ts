import * as PIXI from 'pixi.js';
import MapPiece from './MapPiece';
import Map from './Map';
import Player from './Player';
import PlayerController from './PlayerController';
import Stage from './Stage';

//Aliases
var Container = PIXI.Container,
  autoDetectRenderer = PIXI.autoDetectRenderer,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  TextureCache = PIXI.utils.TextureCache,
  Texture = PIXI.Texture,
  Sprite = PIXI.Sprite,
  Text = PIXI.Text,
  Graphics = PIXI.Graphics;

var stageContainer = new Container();
var renderer = autoDetectRenderer(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.view);

let stage = new Stage(stageContainer, window.innerWidth, window.innerHeight);

var state = play;
var explorer;
var id;
var playerContainer;
var playerController;

getPlayer();
function getPlayer(){
  let loader = new PIXI.loaders.Loader();
  loader
    .add("playerData", "data/player.json")
    .load((loader, resources) => {
      loader
        .add("playerAvatar", resources.playerData.data.avatar)
        .load((loader, resources) => {
          let sprite = new PIXI.Sprite(resources.playerAvatar.texture);
          let player = new Player(resources.playerData.data.id);
          player.setSprite(sprite);
          player.setPosition(new PIXI.Point(resources.playerData.data.position.x, resources.playerData.data.position.y))
          stage.addPlayer(player);
          playerController = new PlayerController(player);
          gameLoop();
        })
    })
}



function gameLoop() {

  //Loop this function 60 times per second
  requestAnimationFrame(gameLoop);

  //Update the current game state
  state();

  //Render the stage
  renderer.render(stageContainer);
}

function play() {
  stage.gameLoop();
  // move the stuff
  // other stuff
}
