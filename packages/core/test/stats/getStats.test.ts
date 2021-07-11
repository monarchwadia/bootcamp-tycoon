import { BootcampTycoon } from '../../src';
import { defaultGame, DEFAULT_FULL_NAME } from '../helpers';

describe('getReport', () => {
  let game: BootcampTycoon;

  beforeEach(() => {
    game = defaultGame();
  });

  it('reports name', () => {
    const stats = game.getReport();
    expect(stats.name).toStrictEqual(DEFAULT_FULL_NAME);
  });

  describe('energy report', () => {
    const testReport = (val: number, exp: string) => {
      it(`reports ${val} as ${exp}`, () => {
        game.state.data.player.resources.energy.curr = val;
        const stats = game.getReport();
        expect(stats.resources.energy.curr).toStrictEqual(exp);
      });
    };

    testReport(10000, '100.00%');
    testReport(7500, '75.00%');
    testReport(7525, '75.25%');
    testReport(100, '1.00%');
    testReport(75, '0.75%');
    testReport(74.6, '0.75%');
    testReport(74.4, '0.74%');
    testReport(0, '0.00%');
  });

  it('reports coding skill as a percentage', () => {
    const stats = game.getReport();
    expect(stats.skills.coding).toStrictEqual('0.00%');
  });
});
