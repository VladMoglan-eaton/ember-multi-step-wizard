import TransmissionUpdateAfterTermsRoute from "./after-terms";
import { inject as service } from '@ember/service';


export default class TransmissionUpdateSummaryRoute extends TransmissionUpdateAfterTermsRoute {
  @service router;

  redirect() {
    super.redirect();
    const model = this.modelFor('transmission.update');

    if (!model.hasAnyChanges) {
      this.router.transitionTo('transmission.update.software');
    }
  }

  model() {
    const model = this.modelFor('transmission.update');
    model.isLoading = true;
    return new Promise(function(resolve) {
      setTimeout(resolve, 5000);
    }).then(function() {
      model.isLoading = false;
      return model;
    })
  }
}