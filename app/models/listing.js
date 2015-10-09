import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  details: DS.attr(),
  image: DS.attr(),
  category: DS.belongsTo('category', {async: true}),
  date_added: DS.attr(),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  hasMap: DS.attr('boolean'),
  hasImage: DS.attr('boolean')
});
