import EmberRouter from '@ember/routing/router';
import config from 'multi-step-wizard/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home'),
  this.route('transmission', function() {
    this.route('index', { path: '/' }),
    this.route('update', function() {
      this.route('index', { path: '/' }),
      this.route('software'),
      this.route('calibrations'),
      this.route('summary')
    })
  })
});
