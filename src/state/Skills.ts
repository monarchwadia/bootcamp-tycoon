export default class Skills {
  public coding: number = 0;

  toJSON() {
    return {
      coding: this.coding,
    };
  }
}
