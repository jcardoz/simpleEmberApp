import DS from 'ember-data';

export default DS.Model.extend({
  product: DS.hasMany('product'),
  order: DS.belongsTo('order'),
  quantity: DS.attr('number')
});
