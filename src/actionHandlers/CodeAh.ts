import TActionHandler from './TActionHandler';

const CodeAh: TActionHandler<never> = {
  id: 'code',
  handle: (_, state) => {
    state.data.player.skills.coding += 1;
    state.data.player.resources.energy -= 1000;
  },
};

export default CodeAh;
