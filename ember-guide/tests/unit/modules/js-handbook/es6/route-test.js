import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | js-handbook/es6', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:js-handbook/es6');
    assert.ok(route);
  });
});
