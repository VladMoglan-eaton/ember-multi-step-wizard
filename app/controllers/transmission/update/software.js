import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TransmissionUpdateSoftwareController extends Controller {
  @service router;

  get isNextButtonDisabled() { !this.model.hasSoftwareChanges; };

  @action handleNewValueInputChanged(event) {
    this.model.software = { current: this.model.software.current, new: event.target.value };
    this.model.resetCalibration();
  }

  @action handleBackButtonClicked() {
    this.router.transitionTo('transmission.update.index');
  }

  @action handleNextButtonClicked() {
    this.router.transitionTo('transmission.update.calibrations');
  }
}