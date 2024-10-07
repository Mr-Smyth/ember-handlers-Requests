// This file defines the application's routing.
import EmberRouter from '@ember/routing/router'; // Import the router class
import config from './config/environment'; // Load configuration settings

export default class Router extends EmberRouter {
  location = config.locationType; // Set how the app's URL behaves
  rootURL = config.rootURL; // Set the root URL of the application
}

// Define the routes in the application.
// Here we define a route called 'users', which corresponds to the /users URL.
Router.map(function () {
  this.route('/');
  this.route('users'); // This means when you navigate to '/users', it will load the users route
});
