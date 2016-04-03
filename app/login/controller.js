import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  rules: {
  },

  actions: {
    login(formValues) {
      this.get('session').authenticate('authenticator:oauth2', formValues.email, formValues.password).catch((reason) => {
        reason.errors.forEach((error) => {
          this.get(`flashMessages`).warning(error.detail);
        })
      });
    },
  },
});
