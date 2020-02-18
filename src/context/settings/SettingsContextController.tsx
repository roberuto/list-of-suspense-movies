import React, { useReducer } from "react";

import {
  SettingsStateContext,
  SettingsDispatchContext
} from "./settingsContext";

import { settingsReducer } from "./settingsReducer";

import { NUMBER_OF_ITEMS } from "../../api/fetchData";

const defaultTimers = Array.from({ length: NUMBER_OF_ITEMS }, () => 2000);

export const SettingsContextController: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(settingsReducer, {
    isActive: false,
    isRandom: true,
    timers: defaultTimers
  });

  return (
    <SettingsStateContext.Provider value={state}>
      <SettingsDispatchContext.Provider value={dispatch}>
        {children}
      </SettingsDispatchContext.Provider>
    </SettingsStateContext.Provider>
  );
};
