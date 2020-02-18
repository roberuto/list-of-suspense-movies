import * as types from "./settingsActionsTypes";
import { SettingsAction } from "./settingsReducer.types";

export const toggleSettings: (
  isActive: boolean
) => SettingsAction = isActive => ({
  type: types.TOGGLE_SETTINGS,
  isActive
});

export const toggleRandomizer: (
  isRandom: boolean
) => SettingsAction = isRandom => ({
  type: types.TOGGLE_RANDOMIZER,
  isRandom
});

export const setFetchTimer: (timers: {
  time: number;
  idx: number;
}) => SettingsAction = ({ time, idx }) => ({
  type: types.SET_FETCHING_TIME,
  timers: {
    time,
    idx
  }
});
