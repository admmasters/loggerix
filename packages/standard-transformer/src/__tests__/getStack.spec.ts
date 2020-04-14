import { getStack } from '../getStack';

describe('getStack', () => {
  it('should show a stack for an error', () => {
    const actual = getStack(new Error('error'), true);

    // Can we do better here for stack comparison?
    expect(actual?.length).toBeGreaterThan(0);
  });

  it('should show a stack for a message with a stack', () => {
    const actual = getStack({ message: 'error', stack: 'some stack' }, true);

    // Can we do better here for stack comparison?
    expect(actual?.length).toBeGreaterThan(0);
  });

  it('should not show a stack for a message', () => {
    let actual = getStack({ message: 'a message' });
    expect(actual?.length).toBeUndefined();

    actual = getStack('some message');
    expect(actual?.length).toBeUndefined();
  });
});
