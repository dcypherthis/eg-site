import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  time: DS.attr(),
  description: DS.attr(),
  lessonNotes: DS.attr(),

  video: DS.belongsTo('video'),
  nextLesson: DS.belongsTo('lesson', {
    inverse: 'prevLesson',
  }),
  prevLesson: DS.belongsTo('lesson', {
    inverse: 'nextLesson',
  }),
});
