import { either, isRight } from 'fp-ts/lib/Either';
import * as t from 'io-ts';

const messageObject = t.type({
  message: t.string,
});

export const getMessage = (message: any): string => {
  if (typeof message === 'string') {
    return message;
  }

  // is an object with a message property
  if (isRight(messageObject.decode(message))) {
    return getMessageObject(message);
  }

  if (message instanceof Error) {
    return getErrorMessage(message);
  }

  throw new Error('unsupported message format');
};

function getMessageObject(message: any): string {
  let result = '';

  either.map(messageObject.decode(message), m => {
    return (result += m.message);
  });

  return result;
}

function getErrorMessage(message: Error): string {
  return message.message;
}
