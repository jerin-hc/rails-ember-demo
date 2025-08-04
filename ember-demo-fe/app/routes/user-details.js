// app/routes/user-details.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserDetailsRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('user-detail');
  }
}
