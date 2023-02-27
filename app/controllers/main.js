import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class OrganizationsController extends Controller {
  @service router;

  get paramsNamesAsString() {
    return JSON.stringify(this.paramNames) ?? 'undefined';
  }
  get paramsAsString() {
    return JSON.stringify(this.params) ?? 'undefined';
  }
}
