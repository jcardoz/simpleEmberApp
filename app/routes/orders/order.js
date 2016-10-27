import Ember from 'ember';

export default Ember.Route.extend({
  storefront: Ember.inject.service('storefront'),
  model: function (params) {
    var storefront = this.get('storefront');
    return storefront.getOrderById(params.order_id);
  }
});
