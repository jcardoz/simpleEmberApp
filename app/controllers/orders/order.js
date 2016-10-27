import Ember from 'ember';

export default Ember.Controller.extend({
  orderID: Ember.computed.alias('model.id'),
  orderName: Ember.computed.alias('model.name'),
  price: Ember.computed.alias('model.price'),
  totalPrice: Ember.computed('model.price', 'model.quantity', function() {
     return 'INR '+ (this.get('model.price')  * this.get('model.quantity'));
  }),
  actions: {
    testInController: function(){
      console.log('hello called from component using an action');
    }
  }
});
