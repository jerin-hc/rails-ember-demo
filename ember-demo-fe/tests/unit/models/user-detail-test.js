import { setupTest } from 'ember-demo-fe/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | user detail', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('user-detail', {});
    assert.ok(model, 'model exists');
  });
});
