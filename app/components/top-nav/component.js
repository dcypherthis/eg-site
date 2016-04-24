import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(`session`),

  classNames: [`top-nav`],

  actions: {
    toggleMenu() {
      this.$().toggleClass(`active`);
    },
  },
});
