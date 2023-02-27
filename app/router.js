import EmberRouter from '@ember/routing/router';
import config from 'nested-dynamic-segments-info/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('main', { path: '/' });
  this.route('dynamic-segments', {
    path: '/dynamic-segments/:first/:second',
  });
});
