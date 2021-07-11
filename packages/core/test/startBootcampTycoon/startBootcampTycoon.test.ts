import startBootcampTycoon from '../../src';

describe('startBootcampTycoon', () => {
  it('sets the first name on the player', () => {
    const fullName = 'Monarch Wadia';
    const game = startBootcampTycoon({
      fullName: fullName,
    });
    expect(game.state.data.player.name).toStrictEqual(fullName);
  });

  it('contains the code action', () => {
    const name = 'Monarch Wadia';
    const game = startBootcampTycoon({
      fullName: name,
    });
    expect(game.getAvailableActions()).toContain('code');
  });
});
