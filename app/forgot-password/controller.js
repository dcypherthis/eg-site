import Ember from 'ember';
import fetch from 'ember-network/fetch';
import config from 'embergrep-site/config/environment';

export default Ember.Controller.extend({
  rules: {
    email: `email|required`,
  },

  actions: {
    requestReset(formValues) {
      const requestUrl = `${config.apiUrl}/password-reset`;

      fetch(requestUrl)
        .then((res) => res.json())
        .then((response) => {

        });
    }
  }
});
