import {
  LoggerContext,
  LoggerMetadata,
  LoggerPayload,
  LogLevels,
} from '@loggerix/core';
import { getMessage } from './getMessage';
import { getServerLogLevel } from './getServerLogLevel';
import { getStack } from './getStack';

let context: LoggerContext | undefined;

let metadata: LoggerMetadata = {};

export const setContext = (newContext: LoggerContext) => {
  context = newContext;
};

export const setMetadata = (newMetadata: LoggerMetadata) => {
  metadata = newMetadata;
};

export function transformer(message: any, level: LogLevels): LoggerPayload {
  if (!context) {
    throw new Error(
      'logger has no context - please add some context to this logger'
    );
  }

  return {
    application_name: context.application_name,
    application_version: context.application_version,
    logger: context.logger,
    level: getServerLogLevel(level),
    message: getMessage(message),
    stack: getStack(message),
    time: new Date().toISOString(),
    correlation_id: '',
    metadata,
    thread: '',
  };
}
