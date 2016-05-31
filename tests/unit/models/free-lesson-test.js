import { moduleForModel, test } from 'ember-qunit';

moduleForModel('free-lesson', 'Unit | Model | free lesson', {
  // Specify the other units that are required for this test.
  needs: ['model:free-video'],
});

test('it exists', function (assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
