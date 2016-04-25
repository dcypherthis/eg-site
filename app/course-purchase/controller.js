import Ember from 'ember';

export default Ember.Controller.extend({
  stripe: Ember.inject.service(),
  jwtInfo: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  init(...rest) {
    this._super(...rest);
  },

  attemptPurchase(token) {
    this.set(`purchasing`, true);

    const attempt = this.store.createRecord(`purchase-attempt`, {
      course: this.get(`model`),
      token: token.id,
    });

    attempt.save()
      .then(() => {
        this.set(`purchasing`, false);
        this.get(`flashMessages`).success(`Course purchased successfully!`);

        this.transitionToRoute(`index`);
      });
  },

  actions: {
    startStripe(course) {
      this.get(`stripe`).open({
        name: `EmberGrep`,
        description: course.get(`name`),
        amount: course.get(`price`),
        email: this.get(`jwtInfo.email`),
      }).then((token) => {
        this.attemptPurchase(token);
      });
    },
  },
});
