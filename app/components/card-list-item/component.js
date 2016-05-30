import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['card-list__item'],

  classNameBindings: ['separated:card-list__item--separated']
});
