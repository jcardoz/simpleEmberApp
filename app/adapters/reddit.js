import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // defaultSerializer: '-default',
  host: 'https://www.reddit.com/r/',
  urlForQuery: function(query) {
    return `${this.host}${query}.json`;
  }
});
