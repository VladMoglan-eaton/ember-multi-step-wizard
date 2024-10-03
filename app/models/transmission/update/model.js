import { tracked } from '@glimmer/tracking';

export default class TransmissionUpdateModel {
  @tracked isLoading = false;

  @tracked areTermsAccepted = false;

  @tracked software = {
    current: tracked(),
    new: tracked()
  };
  
  @tracked calibration = {
    current: tracked(),
    new: tracked()
  };

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