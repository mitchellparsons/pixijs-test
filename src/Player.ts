import Character from "./Character";

export default class Player extends Character{
  constructor(public id: string) {
    super(id);
  }

}