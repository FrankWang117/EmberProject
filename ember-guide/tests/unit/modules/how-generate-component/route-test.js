import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | howGenerateComponent', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:how-generate-component');
    assert.ok(route);
  });
});
