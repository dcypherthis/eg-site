/* global StripeCheckout */

import Ember from 'ember';
import config from 'embergrep-site/config/environment';

const Promise = Ember.RSVP.Promise;

export default Ember.Service.extend({
  stripeKey: config.stripeKey,

  open(options) {
    return new Promise((resolve) => {
      const handler = StripeCheckout.configure({
        key: this.get(`stripeKey`),
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
