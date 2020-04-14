import { LogLevels, ServerLogLevels } from '@loggerix/core';

export const getServerLogLevel = (level: LogLevels): ServerLogLevels => {
  switch (level) {
    case 'debug':
      return 'DEBUG';
    case 'error':
      return 'ERROR';
    case 'warn':
      return 'WARN';
    case 'info':
    case 'log':
      return 'INFO';
  }
};
