import Route from "@ember/routing/route";
import { inject as service } from '@ember/service';

export default class TransmissionUpdateAfterTermsRoute extends Route {
  @service router; 

  redirect() {
    const model = this.modelFor('transmission.update');

    if (!model.areTermsAccepted) {
      this.router.replaceWith('transmission.update');
    }
  }

  model() {
    return this.modelFor('transmission.update');
  }
}