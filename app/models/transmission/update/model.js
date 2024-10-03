import { tracked } from '@glimmer/tracking';

export class TransmissionUpdateConfigEditorModel {
  @tracked software = { current: '', new: '' };
  
  @tracked calibration = { current: '', new: '' };

  get hasSoftwareChanges() {
    return this.software.new !== this.software.current;
  }

  get hasCalibrationChanges() {
    return this.calibration.new !== this.calibration.current
  }

  get hasAnyChanges() {
    return this.hasSoftwareChanges || this.hasCalibrationChanges;
  }

  resetSoftware() {
    this.software.new = this.software.current;
  }

  resetCalibration() {
    this.calibration.new = this.calibration.current;
  }

  reset() {
    this.resetSoftware();
    this.resetCalibration();
  }
}

export default class TransmissionUpdateModel {
  @tracked isLoading = false;
  @tracked areTermsAccepted = false;
  @tracked configEditor = null;
}