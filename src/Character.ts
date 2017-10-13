import Entity from './Entity';

export default class Character extends Entity {

  constructor(public id: string) {
    super(id);
  }
  public moveSpeed: number = 100;

}