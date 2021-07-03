import TActionHandler from './TActionHandler';

const CodeAh: TActionHandler<never> = {
  id: 'code',
  handle: (_, state) => {
    state.player.skills.coding += 1;
  },
};

export default CodeAh;
