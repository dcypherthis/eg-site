import Ember from 'ember';

export function validationError([errors, field]/* , hash*/) {
  if (errors && typeof errors.first === `function`) {
    const message = errors.first(field) || ``;

    return message;
  }

  return null;
}

export default Ember.Helper.helper(validationError);
