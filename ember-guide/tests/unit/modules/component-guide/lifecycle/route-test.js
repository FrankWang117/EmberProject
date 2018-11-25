import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | component-guide/lifecycle', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:component-guide/lifecycle');
    assert.ok(route);
  });
});
