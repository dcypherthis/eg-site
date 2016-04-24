import Ember from 'ember';
import moment from 'moment';

export function secToHuman([seconds]/* , hash*/) {
  const duration = moment.duration(seconds, `seconds`);
  const hours = duration.hours();

  if (hours) {
    return `${duration.hours()} hours, ${duration.minutes()} mins`;
  }
  return `${duration.minutes()} mins`;
}

export default Ember.Helper.helper(secToHuman);
