export type SettingsAction = {
  type: string;
  isActive?: boolean;
  isRandom?: boolean;
  timers?: {
    time: number;
    idx: number;
  };
};
