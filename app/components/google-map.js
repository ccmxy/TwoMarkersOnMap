export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(model) {
    //  var bangalore = { lat: 51.503454, lng: -0.119562 };

      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(model.get('latitude'), model.get('longitude')),
        zoom: 15
      };
      //this.get('map').findMap(container, options);

      //NEW! (With above line for no marker)
      var myLatlng = new google.maps.LatLng(model.get('latitude'),model.get('longitude'));
      var marker = new google.maps.Marker({
        position: myLatlng,
        title: model.get('title')
      });
      var theMap = this.get('map').findMap(container, options);
      marker.setMap(theMap);

//Adding a second marker
      var myLatlng2 = new google.maps.LatLng(52.503454, 1.119562);
      var marker2 = new google.maps.Marker({
        position: myLatlng2,
        title: model.get('title')
      });
      marker2.setMap(theMap);


    }
  }
});
/*
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map  //IMPORTNAT????
  });
}
*/
