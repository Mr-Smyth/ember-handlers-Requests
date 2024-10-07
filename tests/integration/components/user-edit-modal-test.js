import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-handlers/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | user-edit-modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UserEditModal />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <UserEditModal>
        template block text
      </UserEditModal>
    `);

    assert.dom().hasText('template block text');
  });
});
