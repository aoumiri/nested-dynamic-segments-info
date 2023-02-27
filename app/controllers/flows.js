import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class FlowsController extends Controller {
  @service router;

  @action
  goToSettings() {
    this.router.transitionTo('settings');
  }
}
