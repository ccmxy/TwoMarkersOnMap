import Ember from 'ember';

export default Ember.Component.extend({
  showList: true,
  showThumbnail: false,
  showGallery: false,
  showMap: false,
  actions:{
    thumbnailFormShow() {
      this.set('showGallery', false),
      this.set('showList', false),
      this.set('showThumbnail', true),
      this.set('showMap', false);
    },
    listFormShow() {
      this.set('showGallery', false),
      this.set('showList', true),
      this.set('showThumbnail', false),
      this.set('showMap', false);
    },
    galleryFormShow() {
      this.set('showGallery', true),
      this.set('showList', false),
      this.set('showThumbnail', false),
      this.set('showMap', false);
    },
    mapsFormShow() {
      this.set('showMap', true),
      this.set('showGallery', false),
      this.set('showList', false),
      this.set('showThumbnail', false);
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
    }
  }
});
