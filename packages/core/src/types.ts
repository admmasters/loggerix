export type LogLevels = 'debug' | 'log' | 'info' | 'warn' | 'error';

export type ServerLogLevels = 'INFO' | 'DEBUG' | 'ERROR' | 'WARN';

export type Logger = {
  [logLevel in LogLevels]: (
    message?: unknown,
    ...optionalParams: unknown[]
  ) => any;
};

export type LoggerPayload = LoggerContext & {
  level: ServerLogLevels; // log level enum
  message: string; // messages
  time: string; // unit of time (generated for each log message)
  correlation_id?: string; // correlation id
  metadata?: LoggerMetadata; // meta data
  stack?: string; // error stack
  thread?: string; // thread number
};

export type LoggerContext = {
  application_name: string;
  application_version: string;
  logger: string;
};

export type LoggerMetadata = {
  [key: string]: any;
};
