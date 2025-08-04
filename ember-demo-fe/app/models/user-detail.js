import Model, { attr } from '@ember-data/model';

export default class UserDetailModel extends Model {
  @attr('string') name;
  @attr('number') age;
}
