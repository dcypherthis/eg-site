import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  rules: {
    email: `email|required`,
    password: `required`,
  },

  actions: {
    login(formValues) {
      const credentials = {
        identification: formValues.email,
        password: formValues.password,
      };

      this.get(`session`).authenticate(`authenticator:jwt`, credentials).catch((reason) => {
        this.get(`flashMessages`).warning(reason.error_description);
      });
    },
  },
});
