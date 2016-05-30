import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('card-list-item', 'Integration | Component | card list item', {
  integration: true
});

test('it renders non separated', function(assert) {
  // Template block usage:
  this.render(hbs`
    {{#card-list-item }}
      template block text
    {{/card-list-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
  assert.equal(this.$('.card-list__item').length, 1);
  assert.equal(this.$('.card-list__item--separated').length, 0);
});

test('it renders separated', function(assert) {
  // Template block usage:
  this.render(hbs`
    {{#card-list-item separated=true}}
      template block text
    {{/card-list-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
  assert.equal(this.$('.card-list__item').length, 1);
  assert.equal(this.$('.card-list__item--separated').length, 1);
});
