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
    energy: {
      curr: string;
      max: string;
    };
  };
  skills: {
    coding: string;
  };
  time: number;
};
