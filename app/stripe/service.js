/* global StripeCheckout */

import Ember from 'ember';
import config from 'embergrep-site/config/environment';

export default Ember.Service.extend({
  stripeKey: config.stripeKey,

  open(options) {
    return new Promise((resolve) => {
      const handler = StripeCheckout.configure({
        key: this.stripeKey,
        image: config.stripeCheckoutImg,
        locale: `auto`,
        token(token) {
          resolve(token);
        },
      });

      handler.open(options);

      Ember.$(window).on(`popstate`, () => {
        handler.close();
      });
    });
  },
});
