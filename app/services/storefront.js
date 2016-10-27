import Ember from 'ember';
var orders  = [
            { id: 1, name: 'Nate', price: 10, quantity: 2 },
            { id: 2, name: 'Jim' , price: 100, quantity: 3 },
            { id: 3, name: 'Ross', price: 1000, quantity: 4  }
        ];

export default Ember.Service.extend({
    getOrders: function() {
        return orders;
    },
    getOrderById: function(id) {
        return this.getOrders().findBy('id', id);
    }

});
