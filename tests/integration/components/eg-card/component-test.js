import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('eg-card', 'Integration | Component | eg card', {
  integration: true
});

test('it renders basic markup', function(assert) {
  // Template block usage:
  this.render(hbs`
    {{#eg-card title="42"}}
      Foo
    {{/eg-card}}
  `);

  assert.equal(this.$('.card').length, 1);
  assert.equal(this.$('.card__body').text().trim(), 'Foo');
});

test('it renders a title', function(assert) {
  // Template block usage:
  this.render(hbs`
    {{#eg-card title="42"}}
    {{/eg-card}}
  `);

  assert.equal(this.$('.card__title').text().trim(), '42');
});

test('it renders without a title', function(assert) {
  // Template block usage:
  this.render(hbs`
    {{#eg-card}}
    {{/eg-card}}
  `);

  assert.equal(this.$('.card__title').length, 0);
});
