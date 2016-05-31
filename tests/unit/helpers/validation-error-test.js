import { validationError } from 'embergrep-site/helpers/validation-error';
import { module, test } from 'qunit';

module('Unit | Helper | validation error');

// Replace this with your real tests.
test('if validation is not possible return null', (assert) => {
  const result = validationError([42]);

  assert.equal(result, null);
});

// test('if validation is not possible return null', function(assert) {
//   const result = validationError([42]);
//
//   assert.equal(result, null);
// });
