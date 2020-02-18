import React from "react";

import { RandomCheckboxProps } from "./RandomCheckbox.types";

export const RanomChecbox: React.FC<RandomCheckboxProps> = ({
  checked,
  onChange
}) => (
  <div className="settings-checkbox">
    <label htmlFor="random-settings">Is random?</label>
    <input
      id="random-settings"
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  </div>
);
