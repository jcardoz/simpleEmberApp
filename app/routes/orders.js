import Ember from 'ember';

export default Ember.Route.extend({
  storefront: Ember.inject.service('storefront'),
  model: function () {
    var store = this.get('storefront');
    return store.getOrders();
  }
});
