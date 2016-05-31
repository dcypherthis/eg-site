import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import whitespace from '../../../helpers/consistent-whitespace';

moduleForComponent('top-nav', 'Integration | Component | top nav', {
  integration: true,
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{top-nav}}`);

  assert.equal(
    whitespace(this.$().text()), whitespace(`
      >eg
      >eg
      home
      signup
      login`));
});
