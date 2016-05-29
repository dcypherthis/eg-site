import Ember from 'ember';
import AuthenticatedRouteMixin from 'embergrep-site/mixins/requires-auth';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  afterModel(model, transition) {
    if (model.get('purchased')) {
      this.get(`flashMessages`).warning(`You have already purchased this course!`);

      transition.abort();

      return this.transitionTo(`account.purchases`);
    }

    return this._super(...arguments);
  },
});
