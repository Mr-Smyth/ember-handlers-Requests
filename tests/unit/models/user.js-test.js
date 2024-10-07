import { setupTest } from 'ember-handlers/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | user.js', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('user.js', {});
    assert.ok(model, 'model exists');
  });
});
