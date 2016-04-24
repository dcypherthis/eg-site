import Ember from 'ember';

export default Ember.Controller.extend({
  rules: {
    email: `email|required`,
  },

  actions: {
    requestReset(formValues) {

    }
  }
});
