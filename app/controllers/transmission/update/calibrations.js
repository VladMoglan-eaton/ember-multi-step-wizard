import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TransmissionUpdateCalibrationsController extends Controller {
  @service router;

  get isViewSummaryButtonDisabled() { return !this.model.configEditor.hasAnyChanges; };

  @action handleNewValueInputChanged(event) {
    this.model.configEditor.calibration = { 
      ...this.model.configEditor.calibration,
      new: event.target.value 
    };
  }

  @action handleBackButtonClicked() {
    this.router.transitionTo('transmission.update.software');
  }

  @action handleViewSummaryButtonClicked() {
    this.router.transitionTo('transmission.update.summary');
  }
}