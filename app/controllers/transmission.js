import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Transmission extends Controller {
  @tracked isModalVisible = false;

  @action handleClick() {
    this.isModalVisible = true;
  }
}