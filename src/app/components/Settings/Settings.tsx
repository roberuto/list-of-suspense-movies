import React from "react";

import {
  toggleRandomizer,
  setFetchTimer
} from "context/settings/settingsActionCreators";

import { useSettingsDispatch, useSettingsState } from "hooks";

import { SelectOrder } from "./SelectOrder/SelectOrder";
import { RanomChecbox } from "./RandomCheckbox/RandomCheckbox";

import styles from "./Settings.module.css";

import { SettingsProps } from "./Settings.types";

export const Settings: React.FC<SettingsProps> = ({
  revealOrder,
  setRevealOrder
}) => {
  const { isRandom, isActive, timers } = useSettingsState();
  const dispatch = useSettingsDispatch();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    dispatch(toggleRandomizer(checked));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const { value } = event.target;
    dispatch(setFetchTimer({ time: Number(value), idx }));
  };

  return (
    <div className={styles.settings}>
      <div className={styles.settingsBasic}>
        <SelectOrder
          value={revealOrder}
          onChange={event => setRevealOrder(event.target.value)}
        />
        {isActive && (
          <RanomChecbox checked={isRandom!} onChange={handleCheckboxChange} />
        )}
      </div>
      {isActive && (
        <div className={styles.settingsTimers}>
          {timers!.map((timer, idx) => {
            return (
              <div key={idx}>
                <label className={styles.label}>Movie {idx}</label>
                <input
                  type="number"
                  step="1"
                  value={timer}
                  disabled={isRandom}
                  onChange={event => handleInputChange(event, idx)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
