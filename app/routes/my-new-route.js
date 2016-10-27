import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{
            id: 1,
            name: 'jonathan'
          },
          {
            id: 2,
            name: 'anurag'
          },
          {
            id: 3,
            name: 'john doe'
          }
          ]
  }
});
