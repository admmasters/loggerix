import moxios from 'moxios';
import { getBrowserLogger } from '../logger';

describe('getBrowserLogger', () => {
  beforeEach(function() {
    // import and pass your custom axios instance to this method
    moxios.install();
  });

  afterEach(function() {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
  });

  it('should be able to handle string', done => {
    const logger = getBrowserLogger();

    logger.debug('hello world');

    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: '',
      });
      console.log(request);
      done();
    });

    /*
    await logger.debug({ message: 'hello message' });

    await logger.error(new Error('some error'));

    console.log('done');*/
  });
});
