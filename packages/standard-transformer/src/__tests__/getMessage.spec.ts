import { getMessage } from '../getMessage';

describe('getMessage', () => {
  it('should get a message from a string', () => {
    const actual = getMessage('hello world');
    expect(actual).toBe('hello world');
  });

  it("should get a message from an object with a 'message' property", () => {
    const actual = getMessage({
      message: 'hello world',
    });
    expect(actual).toBe('hello world');
  });

  it("should get a message from an object with a 'message' property", () => {
    const actual = getMessage({
      message: 'hello world',
    });
    expect(actual).toBe('hello world');
  });

  it('should get a message from an error', () => {
    const actual = getMessage(new Error('hello world'));
    expect(actual).toBe('hello world');
  });
});
