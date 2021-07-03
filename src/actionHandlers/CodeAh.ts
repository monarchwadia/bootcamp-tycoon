import TActionHandler from './TActionHandler';

const CodeAh: TActionHandler<never> = {
  id: 'code',
  cost: {
    energy: 1000,
    minutes: 30,
  },
  handle: (_, state) => {
    state.data.player.skills.coding += 1;
    return 'You code for a while.';
  },
};

export default CodeAh;
