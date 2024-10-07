// app/components/user-edit-modal.js
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UserEditModalComponent extends Component {

  // Use getters to get values from args
  get firstName() {
    return this.args.editUserData.firstName;
  }

  get lastName() {
    return this.args.editUserData.lastName;
  }

  get description() {
    return this.args.editUserData.description;
  }

  @action
  handleInputChange(field, value) {
    // Update the editUserData property directly so the template updates
    this.args.editUserData[field] = value;
  }

  @action
  submitEdit(event) {
    event.preventDefault();
    // Trigger the passed-in action with the updated user data
    this.args.onEditUser({
      first_name: this.firstName,
      last_name: this.lastName,
      description: this.description,
      id: this.args.editUserData.id,
    });
  }

  @action
  close() {
    // Call the close modal action passed from the parent
    if (typeof this.args.onClose === 'function') {
      this.args.onClose();
    }
  }
}
