import { BootcampTycoon } from '../../src';
import TActionHandler from '../../src/actionHandlers/TActionHandler';
import StateManager from '../../src/StateManager';
import { defaultGame } from '../helpers';

// helper
const buildDef = (game: BootcampTycoon, id: string, isEnabled?: (state: StateManager) => boolean) => {
  const def: TActionHandler & { wasCalled: boolean } = {
    wasCalled: false,
    id,
    cost: {
      energy: 100,
      minutes: 30,
    },
    handle() {
      this.wasCalled = true;
      return 'Called';
    },
  };

  if (isEnabled !== undefined) {
    def.isEnabled = isEnabled;
  }

  game.actionManager.registerActionHandlers(def);

  return def;
};

describe('Action Costs', () => {
  let game: BootcampTycoon;

  beforeEach(() => {
    game = defaultGame();
  });

  it('lets the function get called if isEnabled is undefined', () => {
    const neutralDef = buildDef(game, 'testAction');
    game.act({ id: 'testAction' });
    expect(neutralDef.wasCalled).toStrictEqual(true);
  });

  it('lets the function get called if isEnabled returns true', () => {
    const neutralDef = buildDef(game, 'testAction', () => true);
    game.act({ id: 'testAction' });
    expect(neutralDef.wasCalled).toStrictEqual(true);
  });

  it('lets the function get called if isEnabled returns false', () => {
    const neutralDef = buildDef(game, 'testAction', () => false);
    game.act({ id: 'testAction' });
    expect(neutralDef.wasCalled).toStrictEqual(false);
  });
});
