import { getServerLogLevel } from '../getServerLogLevel';
describe('getServerLogLevel', () => {
  it('should return an appropriate log level', () => {
    let actual: string | undefined;

    actual = getServerLogLevel('debug');
    expect(actual).toBe('DEBUG');

    actual = getServerLogLevel('error');
    expect(actual).toBe('ERROR');

    actual = getServerLogLevel('info');
    expect(actual).toBe('INFO');

    actual = getServerLogLevel('log');
    expect(actual).toBe('INFO');

    actual = getServerLogLevel('warn');
    expect(actual).toBe('WARN');
  });
});
