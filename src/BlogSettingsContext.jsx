import React, { createContext, useContext, useState } from 'react';

// Создаем контекст
export const BlogSettingsContext = createContext();

// Компонент провайдера для контекста
export const BlogSettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    fontSize: '16px',
    lineHeight: '1.5',
  });

  return (
    <BlogSettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </BlogSettingsContext.Provider>
  );
};

// Создаем свой хук для использования контекста
export const useBlogSettingsContext = () => {
  return useContext(BlogSettingsContext);
};
