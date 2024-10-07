import { module, test } from 'qunit';
import { setupTest } from 'ember-handlers/tests/helpers';

module('Unit | Service | user-normalize-push-handler', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:user-normalize-push-handler');
    assert.ok(service);
  });
});
