import { BootcampTycoon } from '../../src';
import ActionHandler from '../../src/actionHandlers/ActionHandler';
import { defaultGame } from '../helpers';

describe('Action Costs', () => {
  const ahDef: ActionHandler = {
    id: 'testAction',
    cost: {
      energy: 100,
      minutes: 30,
    },
    handle: () => 'Test Action',
    isEnabled() {
      return true;
    },
  };

  let game: BootcampTycoon;

  beforeEach(() => {
    game = defaultGame();
    game.actionManager.registerActionHandler(ahDef);
  });

  it('depletes energy based on the cost property', () => {
    const initialEnergy = game.state.data.player.resources.energy.curr;

    expect(game.state.data.player.resources.energy.curr).toStrictEqual(initialEnergy);
    game.act({ id: 'testAction' });
    expect(game.state.data.player.resources.energy.curr).toStrictEqual(initialEnergy - ahDef.cost.energy);
    game.act({ id: 'testAction' });
    expect(game.state.data.player.resources.energy.curr).toStrictEqual(initialEnergy - ahDef.cost.energy * 2);
  });

  it('does not allow the action if the cost is higher than available energy', () => {
    const initialEnergy = 99;
    const initialTime = game.state.data.time;

    game.state.data.player.resources.energy.curr = initialEnergy;

    expect(game.state.data.player.resources.energy.curr).toStrictEqual(initialEnergy);
    const response1 = game.act({ id: 'testAction' });
    expect(response1.code).toStrictEqual('exhausted');
    expect(response1.timestamp).toStrictEqual(initialTime);
    expect(game.state.data.time).toStrictEqual(initialTime);
    expect(game.state.data.player.resources.energy.curr).toStrictEqual(initialEnergy);

    const response2 = game.act({ id: 'testAction' });
    expect(response2.code).toStrictEqual('exhausted');
    expect(response2.timestamp).toStrictEqual(initialTime);
    expect(game.state.data.time).toStrictEqual(initialTime);
    expect(game.state.data.player.resources.energy.curr).toStrictEqual(initialEnergy);
  });

  it('increments time', () => {
    const initialTime = game.state.data.time;

    {
      game.act({ id: 'testAction' });
      const expectedDiff = ahDef.cost.minutes * 60 * 1000;
      expect(game.state.data.time).toStrictEqual(initialTime + expectedDiff);
    }

    {
      game.act({ id: 'testAction' });
      const expectedDiff = 2 * ahDef.cost.minutes * 60 * 1000;
      expect(game.state.data.time).toStrictEqual(initialTime + expectedDiff);
    }
  });

  it('sets the correct timestamp on each action feedback', () => {
    const initialTime = game.state.data.time;

    const response1 = game.act({ id: 'testAction' });
    expect(response1.timestamp).toStrictEqual(initialTime);

    const response2 = game.act({ id: 'testAction' });
    const expectedDiff = ahDef.cost.minutes * 60 * 1000;
    expect(response2.timestamp).toStrictEqual(initialTime + expectedDiff);
  });
});
