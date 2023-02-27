import Route from '@ember/routing/route';

function logTransition(transition, hookName) {
  if (!transition.from) return;
  console.group(hookName);
  console.log('paramNames', transition.from?.paramNames);
  console.log('params', transition.from?.params);
  console.groupEnd();
}

export default class SettingsRoute extends Route {
  redirect(_, transition) {
    logTransition(transition, 'redirect');
  }

  beforeModel(transition) {
    logTransition(transition, 'beforeModel');
  }

  afterModel(_, transition) {
    logTransition(transition, 'afterModel');
  }

  setupController(controller, model, transition) {
    super.setupController(controller, model);
    let { params, paramNames } = transition?.from ?? {};
    controller.paramNames = paramNames;
    controller.params = params;
    logTransition(transition, 'setupController');
  }
}
