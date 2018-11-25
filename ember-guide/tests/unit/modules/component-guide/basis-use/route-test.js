import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | component-guide/basis-use', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:component-guide/basis-use');
    assert.ok(route);
  });
});
