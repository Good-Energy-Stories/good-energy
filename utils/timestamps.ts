import { zeroPad } from './zeroPad';

const MINUTE = 60;
const HOUR = MINUTE * MINUTE;
const getHours = (ts: number) =>
  isLongerThanHour(ts) ? zeroPad(parseInt(`${ts / HOUR}`), 1) : '';
const getMinutes = (ts: number) => zeroPad(parseInt(`${ts / MINUTE}`), 2);
const getSeconds = (ts: number) => zeroPad(parseInt(`${ts % MINUTE}`), 2);
const isLongerThanHour = (ts: number) => ts / HOUR > 1;
const isLongerThanMinute = (ts: number) => ts / MINUTE > 1;
const getFormattedTimestamp = (ts: number) => {
  const h = `${getHours(ts)}${isLongerThanHour(ts) ? ':' : ''}`;
  const m = `${getMinutes(ts)}:`;
  const s = `${getSeconds(ts)}`;
  return `${h}${m}${s}`;
};

export { getSeconds, getMinutes, getHours, getFormattedTimestamp };
