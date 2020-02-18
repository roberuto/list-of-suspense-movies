import React from "react";

import { toggleSettings } from "context/settings/settingsActionCreators";

import { useSettingsState, useSettingsDispatch } from "hooks";

import styles from "./GeneralSetting.module.css";

export const GeneralSetting: React.FC = () => {
  const { isActive } = useSettingsState();
  const dispatch = useSettingsDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    dispatch(toggleSettings(checked));
  };

  return (
    <div className={styles.generalSettings}>
      <label htmlFor="enable-settings">Enable Extra Settings</label>
      <input
        id="enable-settings"
        type="checkbox"
        checked={isActive}
        onChange={handleChange}
      />
    </div>
  );
};
