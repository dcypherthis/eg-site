import Ember from 'ember';

export function validationError([errors, field]/* , hash*/) {
  if (errors && typeof errors.has === `function`) {
    return errors.has(field);
  }
}

export default Ember.Helper.helper(validationError);
