import Ember from 'ember';

export default Ember.Component.extend({

  map: Ember.inject.service('google-map'),

    actions: {
      showMap(listings) {
        debugger;
        var bounds = new google.maps.LatLngBounds();
        var container = this.$('.map-display')[0];//map container to hold the map
        // map properties
        var options = {
          center: this.get('map').center(45.5434085,-122.6544225),
          zoom: 15,
          mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        //map object takes container and options/properties of map
        var displayMap = this.get('map').findMap(container, options);

        //listingsArray holds the name and latitude, longitude of each listing
        var listingsArray = [];
         listings.forEach(function(listing) {
           if(listing.get('hasMap') == true){
             listingsArray.push( [listing.get('title'), listing.get('latitude'), listing.get('longitude')]);
           }
         });
         var marker, i;
         //loop through each element of listingsArray to create marker for each listing on displayMap
         for (var i = 0; i < listingsArray.length; i++) {
           //marker constructor
           var marker = new google.maps.Marker({
            position: new google.maps.LatLng(listingsArray[i][1], listingsArray[i][2]),
            map:displayMap,
            title:listingsArray[i][0]
            });
          bounds.extend(marker.position);//extends the bounds to contain the given point
          displayMap.fitBounds(bounds);//sets the view port to contain the given bounds
          //marker.setMap(displayMap);
         }
       }
     }

      //single marker
      //   actions: {
      //     showMap(listing) {
      //       var container = this.$('.map-display')[0];
      //       var options = {
      //         center: this.get('map').center(listing.get('latitude'), listing.get('longitude')),
      //         zoom: 15
      //       };
      //       var myLatlng = new google.maps.LatLng(listing.get('latitude'),listing.get('longitude'));
      //       var marker = new google.maps.Marker({
      //     position: myLatlng,
      //     title: listing.get('name')
      // });
      //       var displayMap = this.get('map').findMap(container, options);
      //       marker.setMap(displayMap);
      //     }
      //   }
  });
