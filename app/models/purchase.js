import DS from 'ember-data';

export default DS.Model.extend({
  purchasePrice: DS.attr(),
  date: DS.attr(),

  course: DS.belongsTo(),
});
