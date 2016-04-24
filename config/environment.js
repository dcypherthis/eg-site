/* jshint node: true */
/* global process */

require(`dotenv`).config();

module.exports = function (environment) {
  var ENV = {
    modulePrefix: `embergrep-site`,
    environment: environment,
    apiUrl: `http://localhost:8000`,
    baseURL: `/`,
    stripeKey: process.env.STRIPE_KEY,
    stripeCheckoutImg: '/public/checkout-logo.png',
    locationType: `auto`,
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    'ember-simple-auth-token': {
      serverTokenEndpoint: `http://localhost:8000/auth-token`,
      identificationField: `username`,
      timeFactor: 1000,
    },

    'ember-simple-auth': {
      authorizer: `authorizer:token`,
    },

    flashMessageDefaults: {
      timeout: 5000,
    },

    googleFonts: [
      `Open+Sans:400,300`,
      `Play:400,700`,
      `Inconsolata`,
    ],

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === `development`) {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === `test`) {
    // Testem prefers this...
    ENV.baseURL = `/`;
    ENV.locationType = `none`;

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = `#ember-testing`;
  }

  if (environment === `production`) {

  }

  return ENV;
};
