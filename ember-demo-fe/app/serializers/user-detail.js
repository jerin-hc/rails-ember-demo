import RESTSerializer from '@ember-data/serializer/rest';

export default class UserDetailSerializer extends RESTSerializer {
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    return {
      data: payload.map((record) => {
        return {
          id: record.id.toString(),
          type: primaryModelClass.modelName,
          attributes: {
            name: record.name,
            age: record.age
          }
        };
      })
    };
  }
}
