import Ember from 'ember';

export function hasError([errors, field]/* , hash*/) {
  if (errors && typeof errors.has === `function`) {
    return errors.has(field);
  }

  return null;
}

export default Ember.Helper.helper(hasError);
