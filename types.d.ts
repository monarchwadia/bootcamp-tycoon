type Action<T = any> = {
  id: string;
  payload?: T;
};

type StateData = {
  time: number;
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

type ActionFeedback = {
  code?: 'exhausted';
  message: string;
  timestamp: number;
};
