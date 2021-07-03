import BootcampTycoon from "../src";

describe('Initial State', () => {
  it('sets the first name on the player', () => {
    const name = "Monarch Wadia";
    const game = new BootcampTycoon({ name });
    expect(game.player.name).toBe(name);
  });
});
