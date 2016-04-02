import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  sdUrl: DS.attr(),
  hdUrl: DS.attr(),
  time: DS.attr(),

  videoSrc: Ember.computed(`sdUrl`, `hdUrl`, function() {
    return [
      // {src: this.get(`sdUrl`), type: `video/mp4`},
      {src: this.get(`hdUrl`), type: `video/mp4`},
    ];
  }),
});
