import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  rules: {
    email: `required|email`,
    password: `required|confirmed`,
  },

  actions: {
    registerUser(formValues) {
      this.get('session').authenticate('authenticator:register', formValues.email, formValues.password, {password_confirmation: formValues.password_confirmation}).catch((reason) => {
        debugger;
      });
    },
  },
});
