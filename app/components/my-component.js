import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    click: function() {
      debugger;
      this.sendAction("testInController");
    }
  }
});
