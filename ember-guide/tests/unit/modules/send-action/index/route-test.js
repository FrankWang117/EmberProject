import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | send-action/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:send-action/index');
    assert.ok(route);
  });
});
