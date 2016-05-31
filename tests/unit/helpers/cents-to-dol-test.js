import { centsToDol } from 'embergrep-site/helpers/cents-to-dol';
import { module, test } from 'qunit';

module('Unit | Helper | cents to dol');

// Replace this with your real tests.
test('it works', (assert) => {
  const result = centsToDol([4200]);

  assert.equal(result, 42);
});
