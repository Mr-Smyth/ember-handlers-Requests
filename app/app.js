// This file sets up the main application.
import Application from '@ember/application';
import Resolver from 'ember-resolver'; // Resolves dependencies in the app
import loadInitializers from 'ember-load-initializers'; // Loads initializers for the app
import config from './config/environment'; // Load configuration settings

export default class App extends Application {
  modulePrefix = config.modulePrefix; // Set the module prefix
  podModulePrefix = config.podModulePrefix; // Set the pod module prefix
  Resolver = Resolver; // Set the resolver for the app
}

// Load initializers defined in the app's configuration.
loadInitializers(App, config.modulePrefix);
