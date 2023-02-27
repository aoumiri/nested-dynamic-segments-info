import Route from '@ember/routing/route';

export default class MetaRoute extends Route {
  redirect(_, transition) {
    console.group('redirect');
    console.log('paramNames', transition.from?.paramNames);
    console.log('params', transition.from?.params);
    console.groupEnd();
  }

  beforeModel(transition) {
    console.group('beforeModel');
    console.log('paramNames', transition.from?.paramNames);
    console.log('params', 'params', transition.from?.params);
    console.groupEnd();
  }

  afterModel(_, transition) {
    console.group('afterModel');
    console.log('paramNames', transition.from?.paramNames);
    console.log('params', transition.from?.params);
    console.groupEnd();
  }

  setupController(controller, model, transition) {
    super.setupController(controller, model);
    console.group('setupController');
    console.log('paramNames', transition.from?.paramNames);
    console.log('params', transition.from?.params);
    console.groupEnd();
  }
}
