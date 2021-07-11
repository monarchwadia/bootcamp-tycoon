export type TStateData = {
  time: number;
  player: {
    name: string;
    skills: {
      coding: number;
    };
    resources: {
      energy: {
        curr: number;
        max: number;
      };
    };
  };
};

export type TStateStats = {
  name: string;
  resources: {
    energy: number;
  };
  skills: {
    coding: number;
  };
  time: number;
};
