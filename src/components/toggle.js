import React from "react";
import { useDarkMode } from "./useDarkMode";

export const Toggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div>
      <button onClick={(e) => setIsDark(!isDark)} />
    </div>
  );
};
