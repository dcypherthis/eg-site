import { moduleForModel, test } from 'ember-qunit';

moduleForModel('course-abstract', 'Unit | Model | course abstract', {
  // Specify the other units that are required for this test.
  needs: ['model:lesson-abstract'],
});

test('it exists', (assert) => {
  const model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
