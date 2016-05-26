import Ember from 'ember';

export default Ember.Mixin.create({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  beforeModel(transition, ...rest) {
    if (this.get(`session.isAuthenticated`)) {
      this.get(`flashMessages`).warning(`You are already logged in!`);

      transition.abort();
      this.set(`session.attemptedTransition`, transition);

      return this.transitionTo(`account.purchases`);
    }

    return this._super(transition, ...rest);
  },
});
