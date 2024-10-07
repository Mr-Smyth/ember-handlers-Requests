'use strict';

define("ember-handlers/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.

  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }
  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }
  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("ember-handlers/tests/integration/components/user-edit-modal-test", ["qunit", "ember-handlers/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-handlers/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | user-edit-modal', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <UserEditModal />
      */
      {
        "id": "d9vSbVJG",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"user-edit-modal\"]]",
        "moduleName": "/Users/phorest/Documents/code/workspaces/EMBER/ember-handlers/ember-handlers/tests/integration/components/user-edit-modal-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <UserEditModal>
              template block text
            </UserEditModal>
          
      */
      {
        "id": "WINzzQCF",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"user-edit-modal\"]]",
        "moduleName": "/Users/phorest/Documents/code/workspaces/EMBER/ember-handlers/ember-handlers/tests/integration/components/user-edit-modal-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("ember-handlers/tests/integration/helpers/json-test", ["qunit", "ember-handlers/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-handlers/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Helper | json', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{json this.inputValue}}
      */
      {
        "id": "RJ3RFZ5y",
        "block": "[[[1,[28,[35,0],[[30,0,[\"inputValue\"]]],null]]],[],false,[\"json\"]]",
        "moduleName": "/Users/phorest/Documents/code/workspaces/EMBER/ember-handlers/ember-handlers/tests/integration/helpers/json-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('1234');
    });
  });
});
define("ember-handlers/tests/test-helper", ["ember-handlers/app", "ember-handlers/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-handlers/app",0,"ember-handlers/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("ember-handlers/tests/unit/controllers/users-test", ["qunit", "ember-handlers/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-handlers/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Controller | users', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:users');
      assert.ok(controller);
    });
  });
});
define("ember-handlers/tests/unit/models/user.js-test", ["ember-handlers/tests/helpers", "qunit"], function (_helpers, _qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-handlers/tests/helpers",0,"qunit"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Model | user.js', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      const store = this.owner.lookup('service:store');
      const model = store.createRecord('user.js', {});
      assert.ok(model, 'model exists');
    });
  });
});
define("ember-handlers/tests/unit/routes/users-test", ["qunit", "ember-handlers/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-handlers/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | users', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:users');
      assert.ok(route);
    });
  });
});
define("ember-handlers/tests/unit/services/request-test", ["qunit", "ember-handlers/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-handlers/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Service | request', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:request');
      assert.ok(service);
    });
  });
});
define("ember-handlers/tests/unit/services/user-normalize-push-handler-test", ["qunit", "ember-handlers/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-handlers/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Service | user-normalize-push-handler', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:user-normalize-push-handler');
      assert.ok(service);
    });
  });
});
define('ember-handlers/config/environment', [], function() {
  var prefix = 'ember-handlers';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-handlers/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
