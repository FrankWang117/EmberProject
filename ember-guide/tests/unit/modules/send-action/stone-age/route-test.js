import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | send-action/stone-age', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:send-action/stone-age');
    assert.ok(route);
  });
});
