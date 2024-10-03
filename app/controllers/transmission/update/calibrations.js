import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TransmissionUpdateCalibrationsController extends Controller {
  @service router;

  get isViewSummaryButtonDisabled() { return !this.model.hasAnyChanges; };

  @action handleNewValueInputChanged(event) {
    this.model.calibration = { current: this.model.calibration.current, new: event.target.value };
  }

  @action handleBackButtonClicked() {
    this.router.transitionTo('transmission.update.software');
  }

  @action handleViewSummaryButtonClicked() {
    this.router.transitionTo('transmission.update.summary');
  }
}