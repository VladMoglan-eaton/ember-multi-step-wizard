import Route from "@ember/routing/route";
import TransmissionUpdateModel from "../../models/transmission/update/model";

export default class TransmissionUpdateRoute extends Route {
  model() { return new TransmissionUpdateModel(); }
}