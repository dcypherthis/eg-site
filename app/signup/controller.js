import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  rules: {
    email: `required|email`,
    password: `required|confirmed`,
  },

  actions: {
    registerUser(formValues) {
      debugger;
    },
  },
});
