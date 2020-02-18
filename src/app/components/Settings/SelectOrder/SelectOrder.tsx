import React from "react";

import { SelectOrderProps } from "./SelectOrder.types";

export const SelectOrder: React.FC<SelectOrderProps> = ({
  value,
  onChange
}) => (
  <div>
    <select value={value} onChange={onChange}>
      <option value="forwards">forwards</option>
      <option value="backwards">backwards</option>
      <option value="together">together</option>
    </select>
  </div>
);
