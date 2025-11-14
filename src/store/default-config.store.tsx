import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { ChassisConfiguration } from '../lib/models/chassis-configuration';

type Config = {
  chassisConfiguration: ChassisConfiguration[] | undefined;
};

type ConfigContextType = {
  config: Config | undefined;
  setConfig: React.Dispatch<React.SetStateAction<Config | undefined>>;
};

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<Config>();

  return <ConfigContext.Provider value={{ config, setConfig }}>{children}</ConfigContext.Provider>;
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
