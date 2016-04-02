import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  time: DS.attr(),
  active: DS.attr(),
  releaseDate: DS.attr(),
  description: DS.attr(),
  longDescription: DS.attr(),
  comingSoon: DS.attr(),
  purchased: DS.attr(),

  lessons: DS.hasMany(`lesson-abstract`),
});
