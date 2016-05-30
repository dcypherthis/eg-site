import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  price: attr(),
  time: attr(),
  active: attr(),
  releaseDate: attr(),
  description: attr(),
  longDescription: attr(),
  comingSoon: attr(),
  purchased: attr(),
  // lessons: hasMany('lesson'),
  purchase: belongsTo('purchase')
});
