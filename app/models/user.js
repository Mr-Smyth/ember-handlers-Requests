// app/models/user.js
import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') first_name; // Ensure the attribute name matches the payload
  @attr('string') last_name; // Ensure the attribute name matches the payload
  @attr('string') description; // Ensure the attribute name matches the payload
}
