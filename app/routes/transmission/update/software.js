import TransmissionUpdateAfterTermsRoute from "./after-terms";
import { isPresent } from '@ember/utils';
import { TransmissionUpdateConfigEditorModel } from '../../../models/transmission/update/model';

export default class TransmissionUpdateSoftwareRoute extends TransmissionUpdateAfterTermsRoute { 
  async model() {
    const model = this.modelFor('transmission.update');

    if (isPresent(model.configEditor)) {
      return model;
    }

    model.isLoading = true;

    await new Promise(function (resolve) {
      setTimeout(resolve, 3000);
    });

    model.configEditor = new TransmissionUpdateConfigEditorModel();
    model.configEditor.software.current = '551234';
    model.configEditor.software.new = model.configEditor.software.current;
    model.configEditor.calibration.current = '551234_a';
    model.configEditor.calibration.new = model.configEditor.calibration.current;

    model.isLoading = false;
    return model;
  }
}