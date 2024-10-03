import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TransmissionUpdateSummaryController extends Controller {
  @service router;

  @action handleBackButtonClicked() {
    this.router.transitionTo('transmission.update.calibrations');
  }

  @action handleSubmitButtonClicked() {
    this.router.transitionTo('transmission');
  }
}