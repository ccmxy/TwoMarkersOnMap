import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  showList: true,
  showThumbnail: false,
  showGallery: false,
  actions:{
    thumbnailFormShow() {
      this.set('showGallery', false),
      this.set('showList', false),
      this.set('showThumbnail', true),
      $(".map-display").hide();
    },
    listFormShow() {
      this.set('showGallery', false),
      this.set('showList', true),
      this.set('showThumbnail', false),
      $(".map-display").hide();
    },
    galleryFormShow() {
      this.set('showGallery', true),
      this.set('showList', false),
      this.set('showThumbnail', false),
      $(".map-display").hide();
    },
    mapsFormShow() {
      this.set('showGallery', false),
      this.set('showList', false),
      this.set('showThumbnail', false),
      $(".map-display").hide();
    },
    detailsShow: function(){
      this.set('areDetailsShowing', true);
    },
    detailsHide: function() {
      this.set('areDetailsShowing', false);
    },
  delete(listing) {
      if (confirm('Are you sure you want to delete this listing?')) {
        this.sendAction('destroyListing', listing);
      }
    },
    showTheMap(listings) {
      //debugger;
      $(".map-display").show();
      this.set('showGallery', false),
      this.set('showList', false),
      this.set('showThumbnail', false);
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
});
