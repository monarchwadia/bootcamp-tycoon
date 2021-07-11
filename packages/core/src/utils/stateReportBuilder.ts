import { TStateData } from '../types/state';

const percent = (num: number) =>
  Intl.NumberFormat('en', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num / 10000);

const timestamp = (time: number) => Intl.DateTimeFormat('en', {}).format(time);

const stateReportBuilder = (data: TStateData) => {
  return {
    name: data.player.name,
    resources: {
      energy: {
        curr: percent(data.player.resources.energy.curr),
        max: percent(data.player.resources.energy.max),
      },
    },
    skills: {
      coding: percent(data.player.skills.coding),
    },
    time: timestamp(data.time),
  };
};

export default stateReportBuilder;
