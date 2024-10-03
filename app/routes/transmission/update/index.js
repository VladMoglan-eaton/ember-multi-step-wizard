import Route from "@ember/routing/route";

export default class TransmissionUpdateIndexRoute extends Route {
  model() {
    return this.modelFor('transmission.update');
  }
}