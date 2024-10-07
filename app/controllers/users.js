import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UsersController extends Controller {
  // The request service to handle API calls
  @service request;

  // The Ember Data store to manage data - still using the store - right approach?
  @service store;

  // The new user we want to create
  @tracked
  newUser = { first_name: '', last_name: '', description: '' };

  // Controls the visibility of the edit modal
  @tracked
  showEditModal = false;

  // This object will hold data for the user we are editing
  @tracked
  editUserData = {};

  // The action for add a new user
  @action
  async addUser(event) {
    event.preventDefault();

    // Create a new user object - This matches the format our API expects
    const newUser = {
      first_name: event.target.firstName.value,
      last_name: event.target.lastName.value,
      description: event.target.description.value,
    };

    try {
      // Call the request service to send the new user data to the API
      const response = await this.request.createUser(newUser);

      // Log the API response to the console
      console.log('API response:', response);

      // Reset the new user object to clear the form fields
      this.newUser = { first_name: '', last_name: '', description: '' };
    } catch (error) {
      // Log any error that occurs during user creation
      this.request.handleError('Error creating user:', error)
    }
  }

  // This action is triggered to delete a user by their ID
  @action
  async deleteUser(userId) {
    // Log the user ID we are trying to delete
    console.log('Attempting to delete user with ID:', userId);

    // Check if the user exists in the store using their ID
    let userToBeDeleted = this.store.peekRecord('user', userId);

    // Log the user record we found
    console.log('User to be deleted:', userToBeDeleted);

    if (!userToBeDeleted) {
      // If the user does not exist in the store
      // Log an error message
      console.error('User not found in the store');

      // Show an alert to the user
      alert('User not found in the store.');

      // Exit the function if the user is not found
      return;
    }

    // Confirm with the user before deleting
    if (confirm('Are you sure you want to delete this user?')) {
      try {
        // Call the request service to delete the user from the API
        await this.request.deleteUser(userId);

        // Log a success message
        console.log('User deleted successfully.');

        // Optionally, remove the user from the store to update the state
        // This removes the user from the store
        userToBeDeleted.unloadRecord();
      } catch (error) {
        // Log any error that occurs during deletion
        this.request.handleError('Failed to delete the user.', error);
      }
    }
  }

  // This action is triggered to edit a user's information
  @action
  showEditUser(user) {
    // Fill the editUserData with the user’s details to be edited
    this.editUserData = {
      firstName: user.first_name, // Set the first name
      lastName: user.last_name, // Set the last name
      description: user.description, // Set the description
      id: user.id, // Store the user's ID
    };

    // Show the edit modal
    this.showEditModal = true;
  }

  // This action is triggered to close the edit modal
  @action
  closeModal() {
    // Hide the edit modal
    this.showEditModal = false;
  }

  // This action is triggered to update the user with new data
  // app/controllers/users.js

  @action
  async updateUser(updatedUserData) {
    // Log the data we are using to update the user
    console.log('Payload for updateUser:', updatedUserData);
    try {
      // Call the request service to send the updated user data to the API
      await this.request.updateUser(updatedUserData.id, updatedUserData);

      // Close the edit modal after updating
      this.closeModal();
    } catch (error) {
      // Log any error that occurs during user update
      this.request.handleError('Error updating user:', error);
    }
  }
}
