import React, { useState, createContext } from "react";

export const BlogSettingsContext = createContext();

export const BlogSettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    fontSize: "16px",
    lineHeight: "1.5",
  });

  return (
    <BlogSettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </BlogSettingsContext.Provider>
  );
};
