import { LoggerPayload } from '@loggerix/core';
import axios from 'axios';

export const postLogs = (requestUrl: string, message: LoggerPayload) => {
  return axios.post(requestUrl, [message]);
};
