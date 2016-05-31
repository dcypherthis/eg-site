import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: `authorizer:token`,
  host: `http://localhost:8000`,

  handleResponse(status) {
    if (status === 401 && this.get('session.isAuthenticated')) {
      return console.log(`Error encountered`);
    }
    return this._super(...arguments);
  }
});
