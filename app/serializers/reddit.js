import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return {
      data: payload.data.children.map((info) => {
        return {
          id: info.data.id,
          type: 'reddit',
          attributes: info.data,
          kind: info.kind
        };
       })
    };
  }
});
