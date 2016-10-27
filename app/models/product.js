import DS from 'ember-data';

export default DS.Model.extend({
  ID: DS.attr('string'),
  Title: DS.attr('string'),
  Price: DS.attr('number'),
  Description: DS.attr('string'),
  ImageURL: DS.attr('string'),
  lineItem: DS.belongsTo('line-item')
});
