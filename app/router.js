import EmberRouter from '@ember/routing/router';
import config from 'nested-dynamic-segments-info/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });

  this.route('families', function () {
    this.route(
      'parent',
      { path: '/parent/:parent_name', resetNamespace: true },
      function () {
        this.route('children', {
          path: '/children/:first_child/:second_child',
        });
        this.route('meta');
      }
    );
  });
});
