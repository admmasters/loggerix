import { LoggerPayload } from '@loggerix/core';
import axios from 'axios';

/*const LOG_API_URL = 'https://clogger-public.staging.zopa.com/api/logs';*/

const LOG_API_URL = 'https://myloggingpai';

export const transport = (message: LoggerPayload) => {
  return axios.post(LOG_API_URL, [message]);
};
