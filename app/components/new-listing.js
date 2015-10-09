import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },
    save() {
      var params = {
        //Where you put in the category to send back:
        category: this.get('category'),
        //Other details:
        title: this.get('title'),
        details: this.get('details') ? this.get('details') : "",
        image: this.get('image') ? this.get('image') : "",
        latitude: this.get('latitude') ? this.get('latitude') : "",
        longitude: this.get('longitude') ? this.get('longitude') : "",
        date_added: Date.now(),
        hasMap: true,
        hasImage: true
      };
      if(params.latitude == "" || params.longitude == ""){
        params.hasMap = false;
      }
      if(params.image == ""){
        params.hasImage = false;
      }
      this.set('addNewListing', false),
      this.sendAction('save', params);
    }
  }
});
