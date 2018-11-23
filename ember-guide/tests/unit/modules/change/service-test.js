import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | change', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:change');
    assert.ok(service);
  });
});

