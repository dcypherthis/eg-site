import Ember from 'ember';

function matches(pattern, routeName) {
  const escaped = pattern
    .replace(/\./g, `\.`)
    .replace(/\*/g, `[^\.]+`);
  const regex = new RegExp(escaped);
  return routeName.match(regex);
}

function scrollToPosition(position) {
  if (Ember.$(document).scrollTop() > position) {
    Ember.$(`html, body`).animate({
      scrollTop: position,
    }, 400, `swing`);
  }
}

export default Ember.Mixin.create({
  actions: {
    willTransition(transition) {
      this._super();
      const resetScroll = this.get(`resetScroll`);

      // default is opt-in since it's a mixin, set to false to explicitly opt-out
      if (resetScroll === false) {
        return;

      // scroll to a specific position
      } else if (Ember.typeOf(resetScroll) === `number`) {
        scrollToPosition(resetScroll);

      // scroll to a specific position based on the route name
      } else if (Ember.typeOf(resetScroll) === `object`) {
        resetScroll.find((position, routePattern) => {
          if (matches(routePattern, transition.targetName)) {
            scrollToPosition(position);
            return true;
          }

          return false;
        });

      // scroll to top
      } else {
        scrollToPosition(0);
      }
    },
  },
});
