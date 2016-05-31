import { moduleForModel, test } from 'ember-qunit';

moduleForModel('purchase', 'Unit | Model | purchase', {
  // Specify the other units that are required for this test.
  needs: ['model:purchased-course']
});

test('it exists', function (assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
