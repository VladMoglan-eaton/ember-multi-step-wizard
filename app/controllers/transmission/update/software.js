import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TransmissionUpdateSoftwareController extends Controller {
  @service router;

  get isNextButtonDisabled() { !this.model.configEditor.hasSoftwareChanges; };

  @action handleNewValueInputChanged(event) {
    this.model.configEditor.software = { 
      ...this.model.configEditor.software,
      new: event.target.value 
    };
    this.model.configEditor.resetCalibration();
  }

  @action handleBackButtonClicked() {
    this.router.transitionTo('transmission.update.index');
  }

  @action handleNextButtonClicked() {
    this.router.transitionTo('transmission.update.calibrations');
  }
}