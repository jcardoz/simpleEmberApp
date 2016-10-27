import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('orders', function() {
      this.route('order', { path: '/:order_id' });
  });
  this.route('reddit', { path: 'reddit/:subreddit' });
  this.route('myNewRoute');
});

export default Router;
