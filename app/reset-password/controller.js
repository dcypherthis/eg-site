import Ember from 'ember';
import fetch from 'ember-network/fetch';
import { jsonRequestOptions, parseJson } from 'embergrep-site/network-helpers';
import config from 'embergrep-site/config/environment';

export default Ember.Controller.extend({
  queryParams: [`token`],

  rules: {
    email: `email|required`,
    password: `required|confirmed`,
  },

  actions: {
    resetPassword(token, formValues) {
      const requestUrl = `${config.apiUrl}/password-reset/${token}`;
      const data = { ...formValues, token };

      fetch(requestUrl, jsonRequestOptions(`POST`, formValues))
        .then(parseJson)
        .then((response) => {
          if (response) {
            return this.get(`flashMessages`).warning(response.message);
          }

          this.get(`flashMessages`).success(`Your password has been reset.`);
          return this.transitionToRoute(`login`);
        });
    }
  }
});
