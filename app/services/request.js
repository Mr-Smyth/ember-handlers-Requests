// app/services/request.js
import Service from '@ember/service';
import RequestManager from '@ember-data/request';
import Fetch from '@ember-data/request/fetch';
import { inject as service } from '@ember/service';

export default class RequestService extends Service {
  @service store;
  @service userNormalizePushHandler;

  constructor() {
    super(...arguments);
    this.manager = new RequestManager();
    this.manager.use([this.userNormalizePushHandler, Fetch]);
  }

  // centrally handle the errors on any calls to this request manager
  handleError(message, error) {
    console.error(message, error);
    alert(message + (error.message || 'Something went wrong.'));
  }

  async getUsers() {
    return this.manager.request({
      url: 'http://localhost:3000/task-manager-data/api/users',
      method: 'GET',
    });
  }

  async createUser(newUser) {
    return this.manager.request({
      url: 'http://localhost:3000/task-manager-data/api/users',
      method: 'POST',
      body: JSON.stringify(newUser), // Initially, this can be just the raw object
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
  }

  async getUser(userId) {
    return this.manager.request({
      url: `http://localhost:3000/task-manager-data/api/users/${userId}`,
      method: 'GET',
    });
  }

  async deleteUser(userId) {
    return this.manager.request({
      url: `http://localhost:3000/task-manager-data/api/users/${userId}`,
      method: 'DELETE',
    });
  }

  async updateUser(userId, updatedUser) {
    return this.manager.request({
      url: `http://localhost:3000/task-manager-data/api/users/${userId}`,
      method: 'PUT',
      body: JSON.stringify(updatedUser), // Send the user object directly
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
  }
}
