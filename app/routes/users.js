// app/routes/users.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UsersRoute extends Route {
  @service request; // Inject the request service
  @service store; // Inject the store service

  async model() {
    await this.request.getUsers(); // Fetch users and normalize them manually
    return this.store.peekAll('user'); // Return the users in the store
  }
}
