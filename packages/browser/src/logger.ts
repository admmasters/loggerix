import { Logger } from '@loggerix/core';
import { setContext, transformer } from '@loggerix/standard-transformer';
import { transport } from './transport';

export function getBrowserLogger(): Logger {
  setContext({
    application_name: 'Super Application',
    application_version: '1.0.0',
    logger: 'mylogger',
  });
  return {
    debug(message?: unknown) {
      const transformedMessage = transformer(message, 'debug');
      return transport(transformedMessage)
        .then(a => console.log(a))
        .catch(e => console.error(e));
    },
    error(message?: unknown) {
      const transformedMessage = transformer(message, 'error');
      return transport(transformedMessage)
        .then(a => console.log(a))
        .catch(e => console.error(e));
    },
    info(message?: unknown) {
      const transformedMessage = transformer(message, 'info');
      transport(transformedMessage);
    },
    log(message?: unknown) {
      const transformedMessage = transformer(message, 'log');
      transport(transformedMessage);
    },
    warn(message?: unknown) {
      const transformedMessage = transformer(message, 'warn');
      transport(transformedMessage);
    },
  };
}
