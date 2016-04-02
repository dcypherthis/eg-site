import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  time: DS.attr(),
  description: DS.attr(),

  video: DS.belongsTo('free-video'),
});
