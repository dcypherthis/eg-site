import { moduleForModel, test } from 'ember-qunit';

moduleForModel('purchased-course', 'Unit | Model | purchased course', {
  // Specify the other units that are required for this test.
  needs: ['model:lesson', 'model:purchase']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
