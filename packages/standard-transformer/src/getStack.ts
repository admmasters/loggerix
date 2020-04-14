import { either, isRight } from 'fp-ts/lib/Either';
import * as t from 'io-ts';

const stackObject = t.type({
  stack: t.string,
});

export const getStack = (
  message: any,
  showStack: boolean = false
): string | undefined => {
  // is an object with a message property
  if (isRight(stackObject.decode(message))) {
    return getStackObject(message);
  }

  if (message instanceof Error) {
    return message.stack;
  }

  if (showStack) {
    return stacktrace();
  }

  return undefined;
};

function getStackObject(message: any): string {
  let result = '';

  either.map(stackObject.decode(message), m => {
    return (result += m.stack);
  });

  return result;
}

function stacktrace() {
  const err = new Error();
  return err.stack;
}
