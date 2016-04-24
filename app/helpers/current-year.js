import Ember from 'ember';
import moment from 'moment';

export function currentYear() {
  return moment().year();
}

export default Ember.Helper.helper(currentYear);
