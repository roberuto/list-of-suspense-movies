import * as types from "./settingsActionsTypes";

import { SettingsAction } from "./settingsReducer.types";
import { SettingsStateContextType } from "./settingsContext.types";

export const settingsReducer: (
  state: SettingsStateContextType,
  action: SettingsAction
) => SettingsStateContextType = (state, action) => {
  switch (action.type) {
    case types.TOGGLE_SETTINGS: {
      return { ...state, isActive: action.isActive };
    }
    case types.TOGGLE_RANDOMIZER: {
      return { ...state, isRandom: action.isRandom };
    }
    case types.SET_FETCHING_TIME: {
      const { time, idx } = action.timers!;

      return {
        ...state,
        timers: [
          ...state.timers!.slice(0, idx),
          time,
          ...state.timers!.slice(idx + 1)
        ]
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
