import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class TransmissionUpdateController extends Controller {
  @tracked areTermsAccepted = false;
}