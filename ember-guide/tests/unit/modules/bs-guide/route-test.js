import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bs-guide', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bs-guide');
    assert.ok(route);
  });
});
