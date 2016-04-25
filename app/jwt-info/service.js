import Ember from 'ember';
import jwtDecode from 'npm:jwt-decode';

export default Ember.Service.extend({
  session: Ember.inject.service(),

  unknownProperty(key) {
    const session = this.get(`session`);

    if (session.isAuthenticated) {
      const info = jwtDecode(this.get(`session.data.authenticated.token`));

      return Ember.get(info, key);
    }

    return undefined;
  },
});
