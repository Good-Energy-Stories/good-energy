import { padMiliseconds } from './padMiliseconds';
import { padNum } from './padNum';

export function formatDate(t: Date) {
  return `${padNum(t.getUTCHours())}:${padNum(t.getUTCMinutes())}:${padNum(
    t.getUTCSeconds(),
  )}:${padMiliseconds(t.getUTCMilliseconds())}`;
}
