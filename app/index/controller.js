import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  promoVideo: `https://player.vimeo.com/external/154806929.hd.mp4?s=f29b73b5250444394d91e86770273541cf62399d&profile_id=119`,
});
