import Ember from 'ember';

export default Ember.Service.extend({
  session: Ember.inject.service(),

  refresh() {
    const token = this.get(`session.data.authenticated.token`);
    const authenticator = Ember.getOwner(this).lookup(`authenticator:jwt`);

    return authenticator.refreshAccessToken(token);
  },
});
