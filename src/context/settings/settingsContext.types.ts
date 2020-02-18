import { Dispatch } from "react";
import { SettingsAction } from "./settingsReducer.types";

export type SettingsStateContextType = {
  isActive?: boolean;
  isRandom?: boolean;
  timers?: number[];
};

export type SettingsDispatchContextType = Dispatch<SettingsAction>;
