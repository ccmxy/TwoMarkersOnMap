import Ember from 'ember';

export default Ember.Component.extend({

  map: Ember.inject.service('google-map'),

    actions: {
      showMap(sites) {
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

        //sitesArray holds the name and latitude, longitude of each site
        var sitesArray = [];
         sites.forEach(function(site) {
           sitesArray.push( [site.get('title'), site.get('latitude'), site.get('longitude')]);
         });
         var marker, i;
         //loop through each element of sitesArray to create marker for each site on displayMap
         for (var i = 0; i < sitesArray.length; i++) {
           //marker constructor
           var marker = new google.maps.Marker({
            position: new google.maps.LatLng(sitesArray[i][1], sitesArray[i][2]),
            map:displayMap,
            title:sitesArray[i][0]
            });
          bounds.extend(marker.position);//extends the bounds to contain the given point
          displayMap.fitBounds(bounds);//sets the view port to contain the given bounds
          //marker.setMap(displayMap);
         }
       }
     }

      //single marker
      //   actions: {
      //     showMap(site) {
      //       var container = this.$('.map-display')[0];
      //       var options = {
      //         center: this.get('map').center(site.get('latitude'), site.get('longitude')),
      //         zoom: 15
      //       };
      //       var myLatlng = new google.maps.LatLng(site.get('latitude'),site.get('longitude'));
      //       var marker = new google.maps.Marker({
      //     position: myLatlng,
      //     title: site.get('name')
      // });
      //       var displayMap = this.get('map').findMap(container, options);
      //       marker.setMap(displayMap);
      //     }
      //   }
  });
