import Ember from 'ember';
import fetch from 'ember-network/fetch';
import { jsonRequestOptions, parseJson } from 'embergrep-site/network-helpers';
import config from 'embergrep-site/config/environment';

export default Ember.Controller.extend({
  flashMessages: Ember.inject.service(),

  rules: {
    email: `email|required`,
  },

  actions: {
    requestReset(formValues) {
      const requestUrl = `${config.apiUrl}/password-reset`;

      fetch(requestUrl, jsonRequestOptions(`POST`, formValues))
        .then(parseJson)
        .then((response) => {
          if (response.status !== 201) {
            return this.get(`flashMessages`).warning(response.message);
          }

          this.get(`flashMessages`).success(response.message);
          return this.transitionToRoute(`index`);
        });
    }
  }
});
