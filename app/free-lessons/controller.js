import Ember from 'ember';

export default Ember.Controller.extend({
  videoOptions: {
    playbackRates: [0.5, 1, 1.5, 2],
  },
});
