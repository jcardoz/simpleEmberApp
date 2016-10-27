import DS from 'ember-data';

export default DS.Model.extend({
  ID: DS.attr('string'),
  name: DS.attr('string'),
  lineItem: DS.hasMany('line-item')
});
