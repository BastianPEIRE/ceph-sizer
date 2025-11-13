import React, { createContext, useContext, useState, type ReactNode } from 'react';

type Config = {
  apiUrl: string;
  theme: 'light' | 'dark';
  language: string;
};

const defaultConfig: Config = {
  apiUrl: 'https://api.example.com',
  theme: 'light',
  language: 'en',
};

type ConfigContextType = {
  config: Config;
  setConfig: React.Dispatch<React.SetStateAction<Config>>;
};

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<Config>(defaultConfig);

  return <ConfigContext.Provider value={{ config, setConfig }}>{children}</ConfigContext.Provider>;
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
