import Route from "@ember/routing/route";
import TransmissionUpdateModel from "../../models/transmission/update/model";

export default class TransmissionUpdateRoute extends Route {
  model() {
    const model = new TransmissionUpdateModel();
    model.software.areTermsAccepted = false;
    model.software.current = '551234';
    model.software.new = model.software.current;
    model.calibration.current = '551234_a';
    model.calibration.new = model.calibration.current;
    return model;
  }
}