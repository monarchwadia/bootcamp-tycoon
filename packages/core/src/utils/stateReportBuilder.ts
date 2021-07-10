import { TStateData } from '../types/state';

const stateReportBuilder = (data: TStateData) => {
  return {
    name: data.player.name,
    resources: {
      energy: data.player.resources.energy,
    },
    skills: {
      coding: data.player.skills.coding,
    },
    time: data.time,
  };
};

export default stateReportBuilder;
