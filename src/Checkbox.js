import React, { useReducer } from "react";

export function Checkbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      {/* We need to make sure there is a form control added to it. */}
      <label htmlFor="checkbox">{checked ? "checked" : "not checked"}</label>
      <input id="checkbox" type="checkbox" value={checked} onChange={toggle} />
    </>
  );
}
