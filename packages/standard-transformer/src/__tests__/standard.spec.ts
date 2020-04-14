import { LoggerPayload } from '@loggerix/core';
import { setContext, transformer } from '../standard';

describe('transformer', () => {
  it('should not allow a message without a context', () => {
    expect(() => {
      transformer('hello world', 'debug');
    }).toThrow();
  });

  it('should correctly transform a message with a context', () => {
    setContext({
      application_name: 'Super Application',
      application_version: '1.0.0',
      logger: 'Super Logger',
    });

    const actual = transformer('hello world', 'debug');

    const expected: LoggerPayload = {
      application_name: 'Super Application',
      application_version: '1.0.0',
      level: 'DEBUG',
      logger: 'Super Logger',
      message: 'hello world',
      stack: '',
      time: '',
      correlation_id: '',
      metadata: {},
      thread: '',
    };
    expect(actual).toStrictEqual(expected);
  });
});
