import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      lessons: this.store.findAll(`free-lesson`),
      courses: this.store.findAll(`course-abstract`),
    });
  }
});
