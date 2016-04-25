import Ember from 'ember';

export default Ember.Controller.extend({
  stripe: Ember.inject.service(),
  jwtInfo: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  refreshToken: Ember.inject.service(),

  init(...rest) {
    this._super(...rest);
  },

  attemptPurchase(token, course, existing) {
    this.set(`purchasing`, true);

    const attempt = this.store.createRecord(`purchase-attempt`, {
      course, token, existing,
    });

    attempt.save()
      .then(() => {
        this.set(`purchasing`, false);
        this.get(`flashMessages`).success(`Course purchased successfully!`);
        this.get(`refreshToken`).refresh();

        this.transitionToRoute(`index`);
      }, (err) => {
        this.set(`purchasing`, false);

        this.get(`flashMessages`).warning(err.errors[0].detail);
      });
  },

  actions: {
    existingCard(course) {
      this.attemptPurchase(null, course, true);
    },

    startStripe(course) {
      this.get(`stripe`).open({
        name: `EmberGrep`,
        description: course.get(`name`),
        amount: course.get(`price`),
        email: this.get(`jwtInfo.email`),
      }).then((token) => {
        this.attemptPurchase(token.id, course);
      });
    },
  },
});
