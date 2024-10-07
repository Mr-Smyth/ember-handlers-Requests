// app/services/user-normalize-push-handler.js
// This service handles the normalization of user data 
// after making API requests for creating, updating, or deleting users.

import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class UserNormalizePushHandler extends Service {
  // Inject the Ember store service to interact with the application's data store
  @service store;

  // This function is called whenever a request is made
  async request(context, next) {
    // Await the response from the next middleware in the chain
    const response = await next(context.request);
    console.log('API Response:', response);

    // If the request method is DELETE, log the action and return early
    if (context.request.method === 'DELETE') {
      console.log('User successfully deleted, no need to process users data.');
      return;
    }

    // Extract user data from the API response
    const user = response.content.users;
    console.log(
      "if (context.request.method === 'POST' || context.request.method === 'PUT'): ",
      user,
    );

    // If the request method is POST (create) or PUT (update), handle user data accordingly
    if (context.request.method === 'POST' || context.request.method === 'PUT') {
      // Check if the user already exists in the store
      let existingUser = this.store.peekRecord('user', String(user.id));
      if (existingUser) {
        // Update the properties of the existing user record
        existingUser.setProperties({
          first_name: user.first_name,
          last_name: user.last_name,
          description: user.description,
        });
      } else {
        // Create a new user record if it doesn't exist
        this.store.createRecord('user', {
          id: String(user.id),
          first_name: user.first_name,
          last_name: user.last_name,
          description: user.description,
        });
      }
    }

    // Handle GET requests (fetch multiple users)
    // Check if the response contains an array of users - which it should
    if (Array.isArray(response.content.users)) {
      // Iterate over each user in the response
      response.content.users.forEach((user) => {
        // Check if the user already exists in the store
        let existingUser = this.store.peekRecord('user', String(user.id));
        if (!existingUser) {
          // Create a new user record if it doesn't exist
          this.store.createRecord('user', {
            id: String(user.id),
            first_name: user.first_name,
            last_name: user.last_name,
            description: user.description,
          });
        } else {
          // Update properties of the existing user record
          existingUser.setProperties({
            first_name: user.first_name,
            last_name: user.last_name,
            description: user.description,
          });
        }
      });
    }

    // Return the updated user data from the store
    const usersInStore = this.store.peekAll('user');
    console.log('Users in Store:', usersInStore.slice());
    return usersInStore;
  }
}
