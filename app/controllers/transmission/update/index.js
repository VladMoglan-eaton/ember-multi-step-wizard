import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TransmissionUpdateIndexController extends Controller {
  @service router;

  get isNextButtonDisabled() { return !this.model.areTermsAccepted; }

  @action handleTermsAcceptedChanged(event) {
    this.model.areTermsAccepted = event.target.checked;
    this.model.reset();
  }

  @action handleNextButtonClicked() {
    this.router.transitionTo('transmission.update.software');
  }
}