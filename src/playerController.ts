import Player from './player';

export default class playerController {

  constructor(public player: Player) {
    var left = this.keyboard(37);
    var up = this.keyboard(38);
    var right = this.keyboard(39);
    var down = this.keyboard(40);

    left.press = function () {
      player.velocity.x = -15;
      player.velocity.y = 0;
    };
    left.release = function () {
      player.velocity.x = 0;
    };

    up.press = function () {
      player.velocity.y = -15;
      player.velocity.x = 0;
    };
    up.release = function () {
      player.velocity.y = 0;
    };

    right.press = function () {
      player.velocity.x = 15;
      player.velocity.y = 0;
    };
    right.release = function () {
      player.velocity.x = 0;
    };

    down.press = function () {
      player.velocity.y = 15;
      player.velocity.x = 0;
    };
    down.release = function () {
      player.velocity.y = 0;
    };

  }

  private left;
  private up;
  private right;
  private down;

  private keyboard(keyCode) {
    var key = < any > {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    key.downHandler = function (event) {
      if (event.keyCode === key.code) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
      }
      event.preventDefault();
    };

    key.upHandler = function (event) {
      if (event.keyCode === key.code) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
      }
      event.preventDefault();
    };

    window.addEventListener(
      "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
      "keyup", key.upHandler.bind(key), false
    );
    return key;
  }

}