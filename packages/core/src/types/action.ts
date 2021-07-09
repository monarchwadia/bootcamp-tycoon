export type TAction<T = any> = {
  id: string;
  payload?: T;
};

export type TActionFeedback = {
  code?: 'exhausted' | 'disabled';
  message: string;
  timestamp: number;
};
