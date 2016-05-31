import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('card-list', 'Integration | Component | card list', {
  integration: true
});

test('it renders a title', function(assert) {
  // Template block usage:
  this.render(hbs`
    {{#card-list title="42"}}
    {{/card-list}}
  `);

  assert.equal(this.$('.card-list__header').text().trim(), '42');
});

test('it renders without a title', function(assert) {
  // Template block usage:
  this.render(hbs`
    {{#card-list}}
    {{/card-list}}
  `);

  assert.equal(this.$('.card-list__header').length, 0);
});

test('it renders contextual components', function(assert) {
  // Template block usage:
  this.render(hbs`
    {{#card-list as |context|}}
      {{#context.item}}Foo{{/context.item}}
    {{/card-list}}
  `);

  assert.equal(this.$('.card-list__item').length, 1);
  assert.equal(this.$('.card-list__item--separated').length, 0);
  assert.equal(this.$('.card-list__item').text().trim(), 'Foo');
});

test('it renders separated contextual components', function(assert) {
  // Template block usage:
  this.render(hbs`
    {{#card-list separated=true as |context|}}
      {{#context.item}}Foo{{/context.item}}
    {{/card-list}}
  `);

  assert.equal(this.$('.card-list__item').length, 1);
  assert.equal(this.$('.card-list__item--separated').length, 1);
  assert.equal(this.$('.card-list__item').text().trim(), 'Foo');
});
