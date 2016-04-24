import Ember from 'ember';

export function centsToDol([cents]) {
  return Math.round(cents / 100);
}

export default Ember.Helper.helper(centsToDol);
