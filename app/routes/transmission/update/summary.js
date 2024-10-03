import TransmissionUpdateAfterTermsRoute from "./after-terms";
import { inject as service } from '@ember/service';


export default class TransmissionUpdateSummaryRoute extends TransmissionUpdateAfterTermsRoute {
  @service router;

  redirect() {
    super.redirect();
    const model = this.modelFor('transmission.update');

    if (!model.configEditor.hasAnyChanges) {
      this.router.transitionTo('transmission.update.software');
    }
  }
}