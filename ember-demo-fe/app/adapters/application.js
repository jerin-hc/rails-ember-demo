// frontend/app/adapters/application.js
import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'http://127.0.0.1:3000';

  pathForType(modelName) {
    if (modelName === 'user-detail') {
      return 'user_details';
    }
    return super.pathForType(modelName);
  }
}
