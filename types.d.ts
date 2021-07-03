type Action<T = any> = {
  id: string;
  payload?: T;
};

type StateData = {
  player: {
    name: string;
    skills: {
      coding: number;
    };
    resources: {
      energy: number;
    };
  };
};
