import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      purchased: this.store.findAll(`purchased-course`),
      abstracts: this.store.findAll(`course-abstract`),
    });
  },
});
