import Ember from 'ember';
import ScrollMixin from 'embergrep-site/mixins/scroll';
import { module, test } from 'qunit';

module('Unit | Mixin | scroll');

// Replace this with your real tests.
test('it works', function(assert) {
  let ScrollObject = Ember.Object.extend(ScrollMixin);
  let subject = ScrollObject.create();
  assert.ok(subject);
});
