import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | object-guide/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:object-guide/index');
    assert.ok(route);
  });
});
