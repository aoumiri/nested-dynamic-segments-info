import EmberRouter from '@ember/routing/router';
import config from 'nested-dynamic-segments-info/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('protected', { path: '/' }, function () {
    this.route(
      'organizations',
      { path: 'organizations/:organization_slug', resetNamespace: true },
      function () {
        this.route('settings', { resetNamespace: true }, function () {
          this.route('subscription');
        });

        this.route('show', { path: '/' }, function () {
          this.route('flows', {
            path: '/flows/:name/:step_id',
            resetNamespace: true,
          });
        });
      }
    );
  });
});
