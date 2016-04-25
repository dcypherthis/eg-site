import DS from 'ember-data';

export default DS.Model.extend({
  token: DS.attr(),
  existing: DS.attr(),

  course: DS.belongsTo(`course-abstract`),
});
